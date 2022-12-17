import calculate from '../logic/calculate';

describe('Verify calculate works correctly', () => {
  it('When AC is clicked to clear the object value to null', () => {
    const obj = {
      total: 10,
      next: 12,
      operation: '+',
    };

    const actualResult = calculate(obj, 'AC');

    const expectedResult = {
      total: null,
      next: null,
      operation: null,
    };
    expect(actualResult).toMatchObject(expectedResult);
  });
  test('When 0 is clicked with next value 0 should return {}', () => {
    const obj = {
      total: 0,
      next: 0,
      operation: '0',
    };

    const actualResult = calculate(obj, '0');

    const expectedResult = { };
    expect(actualResult).toMatchObject(expectedResult);
  });
  test('When . is clicked with next value 0 should return 0.', () => {
    const obj = {
      total: 0,
      next: '0.',
      operation: '',
    };

    const actualResult = calculate(obj, '.');

    const expectedResult = { };
    expect(actualResult).toMatchObject(expectedResult);
  });
  test('When . is clicked with next value 10 should return 10.', () => {
    const obj = {
      total: null,
      next: '10.',
      operation: null,
    };

    const actualResult = calculate(obj, '.');

    const expectedResult = {
      total: null,
      next: '10.',
      operation: null,
    };
    expect(actualResult).toMatchObject(expectedResult);
  });
  test('When = is clicked with next value null should return 0', () => {
    const obj = {
      total: 0,
      next: null,
      operation: '+',
    };

    const actualResult = calculate(obj, '=');

    const expectedResult = { };
    expect(actualResult).toMatchObject(expectedResult);
  });
  test('When = is clicked with total value operator should return 0', () => {
    const obj = {
      total: null,
      next: 10,
      operation: null,
    };

    const actualResult = calculate(obj, '=');

    const expectedResult = {};
    expect(actualResult).toMatchObject(expectedResult);
  });
  test('When +/- is clicked should return negative or positive reverse of a number', () => {
    const obj = {
      total: null,
      next: 10,
      operation: null,
    };

    const actualResult = calculate(obj, '+/-');

    const expectedResult = {
      total: null,
      next: '-10',
      operation: null,
    };
    expect(actualResult).toMatchObject(expectedResult);
  });
});
