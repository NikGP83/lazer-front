import { createPayroll } from './payroll';
import PayrollItem from './payroll-item';

export const Payroll = createPayroll(PayrollItem);
