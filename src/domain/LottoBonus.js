/**
 *  보너스 번호 담당
 */
import LOTTO_CONSTANTS from "../constants/LottoConstants.js";
import Lotto from "./Lotto";

class LottoBonus {
  #bonus;

  constructor(bonus, winningNumbers) {
    this.#validate(bonus, winningNumbers);
    this.#bonus = bonus;
  }

  #validate(bonus, winningNumbers) {
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 숫자만 입력해 주세요.");
    }

    if (winningNumbers.includes(bonus)) {
      throw new Error("[ERROR] 당첨 번호와 다른 숫자를 입력해 주세요.");
    }

    const bonusOutOfRange =
      LOTTO_CONSTANTS.NUMBER.MIN > bonus || LOTTO_CONSTANTS.NUMBER.MAX < bonus;
    if (bonusOutOfRange) {
      throw new Error(
        `[ERROR] ${LOTTO_CONSTANTS.NUMBER.MIN}~${LOTTO_CONSTANTS.NUMBER.MAX} 사이의 숫자만 입력해 주세요.`
      );
    }

    return bonus;
  }
}

export default LottoBonus;
