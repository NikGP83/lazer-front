import { ReceiptLedger, MonthlyReportData } from '../types/types';
import { BASE_URL } from '../const/const';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { object, string, array } from 'yup';

const responseSchema = object({
  id: string(),
  dateISO: string().required(),
  nameOfCenter: string().required(),
  employees: array().required(),
});

export const portalAPI = createApi({
  reducerPath: 'portalAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchPayrollData: build.query<ReceiptLedger, string>({
      query: () => ({ url: 'payrollData' }),
      transformResponse: (response: unknown) =>
        responseSchema.validateSync(response),
    }),
    fetchMonthlyData: build.query<MonthlyReportData, string>({
      query: () => ({ url: 'monthlyReport' }),
      transformResponse: (response: unknown) =>
        responseSchema.validateSync(response),
    }),
    postFileReport: build.mutation<Blob, object>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useFetchPayrollDataQuery,
  useFetchMonthlyDataQuery,
  usePostFileReportMutation,
} = portalAPI;
