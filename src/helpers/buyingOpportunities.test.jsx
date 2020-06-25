import { buyingOpportunities } from './buyingOpportunities';

it('can return long trading opportunities', () => {
  const prices = [65, 59, 80, 81, 56, 55, 40];
  expect(buyingOpportunities(prices)).toEqual({
    buyIndices: [1],
    exitIndices: [3],
    profit: 22,
    unrealizedProfit: 0,
  });
});

it('can return long trading opportunities with unrealized profit', () => {
  const prices = [10, 50, 30, 70, 5, 20, 15, 10, 5, 80, 100, 120];
  expect(buyingOpportunities(prices)).toEqual({
    buyIndices: [0, 2, 4, 8],
    exitIndices: [1, 3, 5],
    profit: 95,
    unrealizedProfit: 115,
  });
});

it('does not trade if prices only decline', () => {
  const prices = [100, 90, 80, 70, 60, 50, 45, 30, 5, 4, 3, 0];
  expect(buyingOpportunities(prices)).toEqual({
    buyIndices: [],
    exitIndices: [],
    profit: 0,
    unrealizedProfit: 0,
  });
});
