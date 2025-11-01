import { MissionUtils } from "@woowacourse/mission-utils";
/**
 * 로또 발행 담당
 */

class LottoMachine {
  #lottos;

  generateLottos(purchaseAmount) {
    const count = purchaseAmount / 1000;
    this.#lottos = [];

    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lottos.push(numbers);
    }

    return { count, lottos: this.#lottos };
  }
}

export default LottoMachine;
