import calculate from '../logic/calculate';

describe('The calculate component', () => {
  it('performs addition', () => {
    const calcData = {
      total: 2,
      next: 3,
      operation: '+',
    };
    const btnName = '=';
    expect(calculate(calcData, btnName)).toStrictEqual({ total: '5', next: null, operation: null });
  });

  it('performs subtraction', () => {
    const calcData = {
      total: 2,
      next: 3,
      operation: '-',
    };
    const btnName = '=';
    expect(calculate(calcData, btnName)).toStrictEqual({ total: '-1', next: null, operation: null });
  });

  it('performs multiplication', () => {
    const calcData = {
      total: 2,
      next: 3,
      operation: 'x',
    };
    const btnName = '=';
    expect(calculate(calcData, btnName)).toStrictEqual({ total: '6', next: null, operation: null });
  });

  it('performs division', () => {
    const calcData = {
      total: 6,
      next: 3,
      operation: '÷',
    };
    const btnName = '=';
    expect(calculate(calcData, btnName)).toStrictEqual({ total: '2', next: null, operation: null });
  });

  it('performs modulus operation', () => {
    const calcData = {
      total: 7,
      next: 3,
      operation: '%',
    };
    const btnName = '=';
    expect(calculate(calcData, btnName)).toStrictEqual({ total: '1', next: null, operation: null });
  });
});
