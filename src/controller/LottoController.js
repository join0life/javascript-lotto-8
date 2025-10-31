/**
 * @TODO try catch로 오류 관리
 */
import InputView from "../view/InputView.js";
import { Conosle } from "@woowacourse/mission-utils";

class LottoController {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async run() {
    try {
      const purchaseAmount = await this.#inputView.readPurchaseAmount();
    } catch (error) {
      /**
       * @TODO 에러 처리 수정
       */
      Console.print(error.message);
    }
  }
}
