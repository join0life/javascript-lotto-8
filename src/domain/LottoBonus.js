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

    const bonusOutOfRange = 1 > bonus || 45 < bonus;
    if (bonusOutOfRange) {
      throw new Error("[ERROR] 1~45 사이의 숫자만 입력해 주세요.");
    }

    return bonus;
  }
}

export default LottoBonus;
