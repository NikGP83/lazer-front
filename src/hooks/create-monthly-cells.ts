import { MonthlyServicesResult } from '../components/monthly-report/monthly-report';
import { getMonthlyServiceColumns } from '../components/monthly-report/monthly-service-columns';
import { MonthlyReportData } from '../types/types';
import { getDaysInMonth, getMonthlyReportColumns, getRowsData } from '../utils/utils';

interface UseMonthlyReport {
  (data: MonthlyReportData): MonthlyServicesResult;
}


export const createMonthlyCells: UseMonthlyReport = (data) => {
  const {employees, dateISO} = data;

  const rows = getRowsData(employees);
  const columnNumDays = getDaysInMonth(dateISO);
  const monthlyColumnsArr = getMonthlyReportColumns(columnNumDays);
  const columns = getMonthlyServiceColumns(monthlyColumnsArr);
  const monthlyResult = { rows, columns };
  return monthlyResult;
};
