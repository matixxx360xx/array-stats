const mode = require('../index').mode;

describe('mode (dominanta)', () => {
  test('jedna dominanta: [1,2,2,3] -> modes = [2], count = 2', () => {
    const result = mode([1,2,2,3]);
    expect(result.modes).toEqual(['2']); 
    expect(result.count).toBe(2);
  });

  test('wiele dominant (remis): [1,1,2,2,3] -> modes = [1,2], count = 2', () => {
    const result = mode([1,1,2,2,3]);
    expect(result.modes.sort()).toEqual(['1','2']); 
    expect(result.count).toBe(2);
  });

  test('brak powtórzeń: [1,2,3] -> zwraca tablicę z elementami połączonymi w string', () => {
    const result = mode([1,2,3]);
    expect(result).toEqual(['1, 2, 3']); 
  });

  test('pusta tablica -> []', () => {
    const result = mode([]);
    expect(result).toEqual([]);
  });
});
