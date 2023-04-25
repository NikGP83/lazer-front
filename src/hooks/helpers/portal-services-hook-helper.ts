import { MonthlyReportData } from '../../types/types';

export const firstTime = () => ({
  mode: 'firstTime',
});
export const error = () => ({
  mode: 'error',
  errorMessage: 'error',
});

export const receivedData = (data: MonthlyReportData[]) => ({
  mode: 'received-data',
  data,
  sendMonthlyReport: () => undefined,
});

export const loadingTime = () => ({
  mode: 'loading-data',
});

