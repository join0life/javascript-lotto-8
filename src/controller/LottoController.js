/**
 * @TODO try catch로 오류 관리
 */
import InputView from "../view/InputView.js";
import { Console } from "@woowacourse/mission-utils";
import LottoMachine from "../domain/LottoMachine.js";
import OutputView from "../view/OutputView.js";

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
    } catch (error) {
      /**
       * @TODO 에러 처리 수정
       */
      Console.print(error.message);
    }
  }
}

export default LottoController;
