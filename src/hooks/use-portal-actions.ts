import { Employee, ReceiptLedger, Work } from '../types/types';
import { MonthlyReportData } from '../types/types';

interface FirstTime {
  mode: 'firstTime';
}

interface LoadingData {
  mode: 'loading-data';
}

interface SendingData {
  mode: 'sending-data';
  message: string;
}
interface ErrorReceived {
  mode: 'error';
  errorMessage: string;
}


export interface ReceivedData {
  mode: 'received-data';
  data: MonthlyReportData;
  sendMonthlyReport: () => void;
}

export interface ReceivedPayrollData {
  mode: 'received-payroll-data';
  ledgerData: ReceiptLedger;
}

interface PortalServices {
  handleFiles: (files: FileList | null) => void;
}

export type PortalActions = (
  | FirstTime
  | LoadingData
  | SendingData
  | ErrorReceived
  | ReceivedData
  | ReceivedPayrollData
) &
  PortalServices;


const getRandom = (min: number, max: number) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};
const createWorkDays = () => ({
  day: getRandom(1, 30).toString(),
  hour: getRandom(0, 24).toString(),
  gameName: 'Pirate',
});

const createWorkDaysList: () => Work[] = () =>
  Array.from({ length: 30 }, () => createWorkDays());

const createEmployee = () => ({
  id: Math.random(),
  name: 'Mike',
  position: 'Cook',
  department: 'Center',
  ratePerHour: 1,
  foodExpenses: 400,
  award1: 466,
  award2: 9568,
  banquetPercent: 23,
  totalHours: 23,
  tips1: 3335,
  tips2: 32434,
  totalSalary: 3455,
  salary: getRandom(100, 150000),
  fine: 4,
  medicalBook: 'yes',
  tax: 33,
  additionalResp: 232,
  prepaidExpense: 23423,
  workDay: 'yes',
  workNight: 'yes',
  payments: 233,
  work: createWorkDaysList(),
});

const createEmployeeList: () => Employee[] = () =>
  Array.from({ length: 30 }, () => createEmployee());

export const mockPortalData = () => ({
  dateISO: '2022-12-09T00:00:00.000z',
  employees: createEmployeeList(),
  nameOfCenter: 'Омский',
});


export const usePortalActions: () => PortalActions = () => ({
  mode: 'received-data',
  data: mockPortalData(),
  handleFiles: () => undefined,
  sendMonthlyReport: () => undefined,
});
