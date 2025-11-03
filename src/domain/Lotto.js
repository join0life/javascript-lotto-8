/**
 * 당첨 번호 담당
 */
import LOTTO_CONSTANTS from "../constants/LottoConstants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  countMatches(target) {
    const targetNumbers = target instanceof Lotto ? target.#numbers : target;

    return this.#numbers.filter((num) => targetNumbers.includes(num)).length;
  }

  toString() {
    return this.#numbers.join(", ");
  }

  #validate(numbers) {
    const hasNonNumbers = numbers.some((num) => isNaN(num));
    if (hasNonNumbers) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (numbers.length !== LOTTO_CONSTANTS.NUMBER.COUNT) {
      throw new Error(
        `[ERROR] 로또 번호는 ${LOTTO_CONSTANTS.NUMBER.COUNT}개여야 합니다.`
      );
    }

    const allUnique = new Set(numbers).size === numbers.length;
    if (!allUnique) {
      throw new Error("[ERROR] 중복된 로또 번호가 있으면 안됩니다.");
    }

    const numbersOutOfRange = numbers.every(
      (num) =>
        LOTTO_CONSTANTS.NUMBER.MIN > num || LOTTO_CONSTANTS.NUMBER.MAX < num
    );
    if (numbersOutOfRange) {
      throw new Error(
        `[ERROR] ${LOTTO_CONSTANTS.NUMBER.MIN}~${LOTTO_CONSTANTS.NUMBER.MAX} 사이의 숫자만 입력해 주세요.`
      );
    }

    return numbers;
  }
}

export default Lotto;
