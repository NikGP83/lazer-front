export interface EmployeeReceipt{
	name:string;
	position: string;
	advance?: number|undefined;
	salary?: number|undefined;
	netPay?: number|undefined;
}
export interface ReceiptLedger{
	id?: string;
	dateISO: string;
    total?: number;
	employees: EmployeeReceipt[];
}

export interface MonthlyReportColumnData {
  field: keyof EmployeeVerified;
  headerName: string;
  width: number;
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  headerClassName?: string;
}

export interface Work {
  day: string;
  hour: string;
  gameName?: string;
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  totalHours: number;
  ratePerHour: number;
  foodExpenses: number;
  award1: number;
  award2: number;
  banquetPercent: number;
  tips1: number;
  tips2: number;
  totalSalary: number;
  salary: number;
  fine: number;
  medicalBook: string;
  tax: number;
  additionalResp: number;
  prepaidExpense: number;
  workDay: string;
  workNight: string;
  payments: number;
  work: Work[];
}

export interface MonthlyReportData {
  dateISO: string;
  nameOfCenter: string;
  employees: Employee[];
}


export interface EmployeeVerified extends Omit<Employee, 'work'>{
  day1?: string | undefined;
  day2?: string | undefined;
  day3?: string | undefined;
  day4?: string | undefined;
  day5?: string | undefined;
  day6?: string | undefined;
  day7?: string | undefined;
  day8?: string | undefined;
  day9?: string | undefined;
  day10?: string | undefined;
  day11?: string | undefined;
  day12?: string | undefined;
  day13?: string | undefined;
  day14?: string | undefined;
  day15?: string | undefined;
  day16?: string | undefined;
  day17?: string | undefined;
  day18?: string | undefined;
  day19?: string | undefined;
  day20?: string | undefined;
  day21?: string | undefined;
  day22?: string | undefined;
  day23?: string | undefined;
  day24?: string | undefined;
  day25?: string | undefined;
  day26?: string | undefined;
  day27?: string | undefined;
  day28?: string | undefined;
  day29?: string | undefined;
  day30?: string | undefined;
  day31?: string | undefined;
}

