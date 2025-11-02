class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  #validate(numbers) {
    const hasNonNumbers = numbers.some((num) => isNaN(num));
    if (hasNonNumbers) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const allUnique = new Set(numbers).size === numbers.length;
    if (!allUnique) {
      throw new Error("[ERROR] 중복된 로또 번호가 있으면 안됩니다.");
    }

    const numbersOutOfRange = numbers.every((num) => 1 > num || 45 < num);
    if (numbersOutOfRange) {
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해 주세요.");
    }

    return numbers;
  }
}

export default Lotto;
