const { median } = require('../index');

describe('median', () => {
  test('mediana z [3,1,2] = 2 (nieparzysta)', () => {
    expect(median([3,1,2])).toBe(2);
  });

  test('mediana z [1,4,2,3] = 2.5 (parzysta)', () => {
    expect(median([1,4,2,3])).toBe(2.5);
  });

  test('mediana z [5] = 5', () => {
    expect(median([5])).toBe(5);
  });

  test('pusta tablica → []', () => {
    expect(median([])).toEqual([]);
  });
});
