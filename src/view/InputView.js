import { Console } from "@woowacourse/mission-utils";
import LOTTO_CONSTANTS from "../constants/LottoConstants.js";

/**
 * @TODO 로또 구입 금액, 당첨 번호 입력 받기
 * */

class InputView {
  async readPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      "구입 금액을 입력해 주세요.\n"
    );
    const purchaseAmount = Number(purchaseAmountInput);
    return this.#validate(purchaseAmount);
  }

  async readWinningNumbers() {
    const winningNumbersInput = await Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const winningNumbers = winningNumbersInput
      .split(",")
      .map((num) => num.trim())
      .map(Number);

    return winningNumbers;
  }

  async readBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    const bonusNumber = Number(bonusNumberInput);
    return bonusNumber;
  }

  #validate(purchaseAmount) {
    if (isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }

    if (purchaseAmount < 0) {
      throw new Error("[ERROR] 금액은 0보다 커야 합니다.");
    }

    if (purchaseAmount % LOTTO_CONSTANTS.PRICE.TICKET !== 0) {
      throw new Error(
        `[ERROR] 금액은 ${LOTTO_CONSTANTS.PRICE.TICKET}원 단위로 입력해야 합니다.`
      );
    }

    return purchaseAmount;
  }
}

export default InputView;
