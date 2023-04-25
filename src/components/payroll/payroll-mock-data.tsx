import { EmployeeReceipt } from '../../types/types';

export const mockPayrollEmployees: EmployeeReceipt[] = [
  {
    name: 'Елизавета Старых',
    position: 'Управляющий',
    advance: 9000,
    salary: 21000,
    netPay: 30000,
  },
  {
    name: 'Алексей Кузнецов',
    position: 'Повар',
    //advance: undefined,
    salary: 15000,
    netPay: 15000,
  },
  {
    name: 'Владимир Моржов',
    position: 'Повар',
    //advance: undefined,
    //netPay: undefined,
    //salary: undefined
  },
];
