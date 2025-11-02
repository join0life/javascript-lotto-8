/**
 * @TODO try catch로 오류 관리
 */
import InputView from "../view/InputView.js";
import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "../domain/LottoMachine.js";
import OutputView from "../view/OutputView.js";
import Lotto from "../domain/Lotto.js";
import LottoBonus from "../domain/LottoBonus.js";

class LottoController {
  #inputView;
  #lottoMachine;
  #outputView;

  constructor() {
    this.#inputView = new InputView();
    this.#lottoMachine = new LottoMachine();
    this.#outputView = new OutputView();
  }

  async run() {
    try {
      const purchaseAmount = await this.#inputView.readPurchaseAmount();
      const { count, lottos } =
        this.#lottoMachine.generateLottos(purchaseAmount);
      this.#outputView.printLottos(count, lottos);

      const winningNumbers = await this.#getWinningNumbers();
      const bonusNumber = await this.#getBonusNumber(winningNumbers);
    } catch (error) {
      /**
       * @TODO 에러 처리 수정
       */
      Console.print(error.message);
    }
  }

  async #getWinningNumbers() {
    try {
      const winningNumbers = await this.#inputView.readWinningNumbers();
      return new Lotto(winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.#getWinningNumbers();
    }
  }

  async #getBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.#inputView.readBonusNumber();
      return new LottoBonus(bonusNumber, winningNumbers);
    } catch (error) {
      Console.print(error.message);
      return this.#getBonusNumber(winningNumbers);
    }
  }
}

export default LottoController;
