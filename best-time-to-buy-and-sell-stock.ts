function maxProfit(prices: number[]): number {

  let min: number = Number.MAX_VALUE, max: number = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
    
  }

  return max;
};