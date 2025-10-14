const variance = require('../index').variance;

describe('variance (wariancja)', () => {

  test('[4, 6, 8] -> wariancja = 2.67', () => {
    const result = variance([4, 6, 8]);
    expect(result).toBeCloseTo(2.67, 2); 
  });

  test('[1, 1, 1, 1] -> wariancja = 0', () => {
    const result = variance([1, 1, 1, 1]);
    expect(result).toBe(0);
  });

  test('[1, 2, 3, 4, 5] -> wariancja = 2.0', () => {
    const result = variance([1, 2, 3, 4, 5]);
    expect(result).toBeCloseTo(2.0, 2);
  });

  test('[10, 20, 30, 40, 50] -> wariancja = 200.0', () => {
    const result = variance([10, 20, 30, 40, 50]);
    expect(result).toBeCloseTo(200.0, 2);
  });

  test('wartości ujemne: [-2, -4, -6, -8] -> wariancja = 5.0', () => {
    const result = variance([-2, -4, -6, -8]);
    expect(result).toBeCloseTo(5.0, 2);
  });

  test('liczby zmiennoprzecinkowe: [1.5, 2.5, 3.5] -> wariancja = 0.67', () => {
    const result = variance([1.5, 2.5, 3.5]);
    expect(result).toBeCloseTo(0.67, 2);
  });

  test('jeden element: [10] -> wariancja = 0', () => {
    const result = variance([10]);
    expect(result).toBe(0);
  });

  test('duży rozrzut: [1, 100, 1000] -> wariancja = 198000.67', () => {
    const result = variance([1, 100, 1000]);
    expect(result).toBeCloseTo(201978, 2);
  });

  test('pusta tablica -> []', () => {
    const result = variance([]);
    expect(result).toEqual([]);
  });

});
