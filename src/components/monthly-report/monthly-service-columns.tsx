import { MonthlyReportColumnData } from '../../types/types';


export const getMonthlyServiceColumns = (arrOfColumnDays: MonthlyReportColumnData[]):MonthlyReportColumnData[] => ([
  {
    field: 'name',
    headerName: 'Имя',
    width: 100,
    sortable: true,
    filterable: true,
  },
  ...arrOfColumnDays,
  {
    field: 'totalHours',
    headerName: 'итог',
    width: 100,
    sortable: true,
    filterable: true,
    editable: true,
  },
  {
    field: 'workDay',
    headerName: 'день',
    width: 100,
    sortable: false,
    filterable: false,
  },
  {
    field: 'workNight',
    headerName: 'ночь',
    width: 100,
    sortable: false,
    filterable: false,
  },
  {
    field: 'ratePerHour',
    headerName: 'Ставка в час',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'payments',
    headerName: 'Выплаты (маршалы/официанты)',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'prepaidExpense',
    headerClassName: 'columnsPaymentsColor',
    headerName: 'Аванс',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'additionalResp',
    headerName: 'Доп. обязанности, руб',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'fine',
    headerName: 'Штрафы',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'medicalBook',
    headerName: 'Мед. книжка',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'tax',
    headerName: 'Налоговый вычет',
    width: 100,
    sortable: true,
    filterable: true,
  },
  {
    field: 'tips1',
    headerName: 'Чаевые Ч1',
    width: 100,
    sortable: true,
    filterable: true,
    headerClassName: 'columnsPaymentsColor'
  },
  {
    field: 'tips2',
    headerName: 'Чаевые Ч2',
    width: 100,
    sortable: true,
    filterable: true,
    headerClassName: 'columnsPaymentsColor'
  },
  {
    field: 'banquetPercent',
    headerName: 'Проценты за банкет',
    width: 100,
    sortable: true,
    filterable: true,
    headerClassName: 'columnsPaymentsColor'
  },
  {
    field: 'award1',
    headerName: 'Премия 1',
    width: 100,
    sortable: true,
    filterable: true,
    headerClassName: 'columnsPaymentsColor'
  },
  {
    field: 'award2',
    headerName: 'Премия 2',
    width: 100,
    sortable: true,
    filterable: true,
    headerClassName: 'columnsPaymentsColor'
  },
  {
    field: 'foodExpenses',
    headerName: 'Расходы на продукты',
    width: 100,
    sortable: true,
    filterable: true,
    headerClassName: 'columnsPaymentsColor'
  },
  {
    field: 'totalSalary',
    headerName: 'Итого ЗП, руб',
    width: 100,
    sortable: true,
    filterable: true,
  },
]);
