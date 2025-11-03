/**
 * @TODO 당첨 결과 계산 및 통계
 */

import LOTTO_CONSTANTS from "../constants/LottoConstants.js";

class LottoResult {
  calculateResult(winningNumbers, bonusNumber, lottos) {
    let countMatchNumbers = {
      3: 0,
      4: 0,
      5: 0,
      "5+bonus": 0,
      6: 0,
    };

    let totalPrize = 0;

    lottos.forEach((lotto) => {
      const matchCount = lotto.countMatches(winningNumbers);
      const hasBonus = lotto.includes(bonusNumber);

      switch (matchCount) {
        case 6: {
          countMatchNumbers[6]++;
          totalPrize += LOTTO_CONSTANTS.PRIZE.FIRST;
          break;
        }
        case 5: {
          if (hasBonus) {
            countMatchNumbers["5+bonus"]++;
            totalPrize += LOTTO_CONSTANTS.PRIZE.SECOND;
          } else {
            countMatchNumbers[5]++;
            totalPrize += LOTTO_CONSTANTS.PRIZE.THIRD;
          }
          break;
        }
        case 4: {
          countMatchNumbers[4]++;
          totalPrize += LOTTO_CONSTANTS.PRIZE.FOURTH;
          break;
        }
        case 3: {
          countMatchNumbers[3]++;
          totalPrize += LOTTO_CONSTANTS.PRIZE.FIFTH;
          break;
        }
        default:
          break;
      }
    });

    const purchaseAmount = LOTTO_CONSTANTS.PRICE.TICKET * lottos.length;
    const profitRate = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    return { countMatchNumbers, profitRate };
  }
}

export default LottoResult;
