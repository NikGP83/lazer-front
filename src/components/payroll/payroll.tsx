import { ReactElement } from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { textLabels } from '../../const/const';
import { EmployeeReceipt, ReceiptLedger } from '../../types/types';
import { usePayrollData } from '../../hooks/use-payroll-data';

export const createPayroll = (
  payrollItem: (props: EmployeeReceipt) => ReactElement | null
) => {
  const PayrollItem = payrollItem;

  function Payroll() {

    const data = usePayrollData() as ReceiptLedger;
    console.log(data)
    const {employees} = data;
    const getTotalSalary = (employeesData: EmployeeReceipt[]) => {
      const result = employeesData.reduce(
        (total, employeeSalary) =>
          employeeSalary.salary !== undefined
            ? total + employeeSalary.salary
            : total,
        0
      );
      return result;
    };

    if(typeof employees === 'undefined'){
      return null;
    }

    return (
      <Container>
        <Typography mb={5} variant='h5'>
          {textLabels.toPayroll}:
          <span className='totalSalary'>
            {getTotalSalary(employees)}
          </span>
        </Typography>
        {employees.map((worker) => (
          <PayrollItem key={worker.name} {...worker} />
        ))}
      </Container>
    );
  }

  return Payroll;
};
