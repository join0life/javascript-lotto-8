/**
 * 로또 발행 담당
 */
import { MissionUtils } from "@woowacourse/mission-utils";
import LOTTO_CONSTANTS from "../constants/LottoConstants.js";
import Lotto from "../domain/Lotto.js";

class LottoMachine {
  #lottos;

  generateLottos(purchaseAmount) {
    const count = purchaseAmount / LOTTO_CONSTANTS.PRICE.TICKET;
    this.#lottos = [];

    for (let i = 0; i < count; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_CONSTANTS.NUMBER.MIN,
        LOTTO_CONSTANTS.NUMBER.MAX,
        LOTTO_CONSTANTS.NUMBER.COUNT
      );
      const sortedNumbers = numbers.sort((a, b) => a - b);
      this.#lottos.push(new Lotto(sortedNumbers));
    }

    return { count, lottos: this.#lottos };
  }
}

export default LottoMachine;
