import { textLabels } from '../../const/const';
import { createMonthlyCells } from '../../hooks/create-monthly-cells';
import { createMonthlyReport } from './monthly-report';


export const MonthlyReport = createMonthlyReport(createMonthlyCells, textLabels);
