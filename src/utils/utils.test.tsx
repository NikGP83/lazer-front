import { getDaysInMonth } from './utils';

describe('Проверка поведения функции getDaysInMonth', () => {
  it('Вернёт правильное количество дней ', () => {
    const fakeISO = '2022-12-09T00:00:00.000z';
    expect(getDaysInMonth(fakeISO)).toBe(31);
  });
  it('Бросит исключение если строка пустая', () => {
    const fakeISO = '';
    expect(() => getDaysInMonth(fakeISO)).toThrowError(RangeError);
  });
  it('Бросает исключение если строка не в формате ISO', () => {
    const fakeISO = 'fake';
    expect(() => getDaysInMonth(fakeISO)).toThrowError(RangeError);
  });
  it('Для старых дат бросает исключение', () => {
    const fakeISO = '1917-10-25T00:00:00.000z';
    expect(() => getDaysInMonth(fakeISO)).toThrowError(RangeError);
  });
  it.each([
    ['2022-12-31T00:00:00.000z', 31],
    ['2022-12-31T01:00:01.001z', 31],
    ['2022-12-31T01:01:01.001z', 31],
    ['2022-12-31T23:59:59.999z', 31],
    ['2022-02-28T00:01:01.001z', 28],
    ['2022-02-28T00:00:00.000z', 28],
    ['2022-02-28T23:59:59.999z', 28],
    ['2024-02-29T00:00:00.000z', 29],
    ['2024-02-29T01:01:01.001z', 29],
    ['2024-02-29T23:59:59.999z', 29],
    ['2024-02-29T23:59:59.999+0600', 29],
  ])('Тестируем пограничное значение', (time, expected) => {
    expect(getDaysInMonth(time)).toBe(expected);
  });
});

describe('Проверка поведения функции getMonthlyReportColumns', () => {
  it('Должна быть вызвана с параметром в виде числа', () => {
    const mockNum = 31;
    const getMonthlyReportColumns = jest.fn();
    getMonthlyReportColumns(mockNum);
    expect(getMonthlyReportColumns).toBeCalledWith(mockNum);
  });
  it('Должна вернуть массив с двумя моковыми объектами', () => {
    const mockFiles = [
      {
        id: 12,
        field: 'day1',
        headerName: '01',
        width: 20,
      },
      {
        id: 12,
        field: 'day01',
        headerName: '01',
        width: 20,
      },
    ];
    const getMonthlyReportColumns = jest.fn();
    getMonthlyReportColumns.mockReturnValue(mockFiles);
    expect(getMonthlyReportColumns()).toEqual(mockFiles);
  });
});
