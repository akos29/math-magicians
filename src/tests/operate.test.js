import operate from '../logic/operate';

describe('Verify if operator functions works correctly', () => {
  test('add 2 + 2 to equal 4', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('sub 2 - 2 to equal 0', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('multiply 2 * 2 to equal 4', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('divide 2 / 2 to equal 1', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
  test('modulo 2 % 2 to equal 0', () => {
    expect(operate(2, 2, '%')).toBe('0');
  });
  test('modulo 2 % 0 to be Error', () => {
    expect(operate(2, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
