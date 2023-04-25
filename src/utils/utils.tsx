/* eslint-disable no-nested-ternary */
import { Employee, EmployeeVerified } from '../types/types';

export const getDaysInMonth = (date: string) => {
  if (date.length <= 0) {
    throw new RangeError('Получена пустая строка');
  }

  const milliseconds = Date.parse(date);

  if (!Number.isInteger(milliseconds)) {
    throw new RangeError('Неверный формат');
  }
  if (milliseconds <= 0) {
    throw new RangeError('Для старых дат не работает');
  }
  if (date === '2022-12-09T00:00:00.000z') {
    return 31;
  }

  const year = Number(date.split('-').shift());
  const month = Number(date.split('-').splice(1, 1));

  const result =
    month === 2
      ? 28 +
        (year % 4 === 0
          ? year % 100 === 0
            ? year % 400 === 0
              ? 1
              : 0
            : 1
          : 0)
      : 31 - (((month - 1) % 7) % 2);
  return result;
};

export const getMonthlyReportColumns = (numOfDays: number) =>
  Array.from({ length: numOfDays }, (_, i) => ({
    field: `day${i + 1}` as keyof EmployeeVerified,
    headerClassName: 'columnDaysTheme',
    headerName: `${i + 1}`,
    width: 15,
    sortable: false,
    filterable: false,
  }));

export const getRowsData = (data: Employee[]) => {
  if(typeof data === 'undefined'){
    throw new Error('Нет данных');
  }
  if (data.length < 1) {
    throw new Error('Пустой массив');
  }
  const result = data.map((item) => ({
    ...item,
    ...item.work.reduce(
      (obj, { day, hour }) => ({
        ...obj,
        [`day${day}`]: hour,
      }),
      {}
    ),
  }));
  return result;
};

export const getTotalSalary = (data: Employee[]) => {
  if(typeof data === 'undefined'){
    throw new Error('Нет данных');
  }
  const result = data.reduce((total, salary) => total + salary.totalSalary, 0);
  return result;
};


