import {
  EmployeeVerified,
  MonthlyReportColumnData,
  MonthlyReportData,
} from '../../types/types';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import { Button, Stack, Typography } from '@mui/material';
import { gridOverlayText, textLabels } from '../../const/const';
import { MonthlyReportProps } from '../portal/portal';

export interface MonthlyServicesResult {
  columns: MonthlyReportColumnData[];
  rows: EmployeeVerified[];
}
export const createMonthlyReport = (
  createMonthlyCells: (data: MonthlyReportData) => MonthlyServicesResult,
  labels: Pick<typeof textLabels, 'print'>
) => {
  function MonthlyReport(props: MonthlyReportProps) {
    const sendMonthlyReport = props.sendMonthlyReport;
    const result = props.data;
  
    const monthlyResult = createMonthlyCells(result);
    const { columns, rows } = monthlyResult;
    const hasError = false;

    return (
      <Box
        sx={{
          height: 600,
          width: '100%',
          '& .MuiDataGrid-cell': {
            border: '1px solid rgb(60, 60, 60)',
          },
          '& .MuiDataGrid-columnHeaders': {
            border: '1px solid rgb(60, 60, 60)',
          },
          '& .columnDaysTheme': {
            backgroundColor: 'rgb(255, 0, 0)',
            color: 'rgb(60, 60, 60)',
            fontWeight: '600',
          },
          '& .columnsPaymentsColor': {
            backgroundColor: 'rgb(60, 179, 113)',
          },
        }}
      >
        <Typography variant='h5'>
          Табель учета использования рабочего времени {result.nameOfCenter}
        </Typography>
        <br />
        <Typography variant='h6'>{result.dateISO}</Typography>
        <Button onClick={sendMonthlyReport} variant='contained'>
          {labels.print}
        </Button>

        <DataGrid
          columns={columns}
          rows={rows}
          error={hasError || undefined}
          hideFooterPagination
          hideFooterSelectedRowCount
          rowHeight={25}
          components={{
            NoRowsOverlay: () => (
              <Stack
                height='100%'
                alignItems='center'
                justifyContent='center'
                component='h2'
              >
                {gridOverlayText.nothingToRender}
              </Stack>
            ),
          }}
        />
      </Box>
    );
  }

  return MonthlyReport;
};
