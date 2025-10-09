const { mean } = require('../index');

describe('mean', () => {
  test('średnia z [1,2,3] = 2', () => {
    expect(mean([1,2,3])).toBe(2);
  });

  test('średnia z [5] = 5', () => {
    expect(mean([5])).toBe(5);
  });

  test('średnia z [1,-1,3] = 1', () => {
    expect(mean([1,-1,3])).toBe(1);
  });

  test('pusta tablica → []', () => {
    expect(mean([])).toEqual([]);
  });
});