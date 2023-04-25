import { createPayrollLoader, PayrollInjection } from './create-payroll-loader';
import { getPayrollData } from './get-payroll-data';

const i: PayrollInjection = {
  getPayrollData,
};
export const payrollLoader = createPayrollLoader(i);
