import { screen, render } from '@testing-library/react';
import { textLabels } from '../../const/const';
import PayrollItem from './payroll-item';
import { mockPayrollEmployees } from './payroll-mock-data';

const data = mockPayrollEmployees;
const dataWithAllValues = data[0];
const dataWithoutAdvanceValue = data[1];

describe('Поведение компонента PayrollItem', () => {
  it('Если пришли все данные рендерим   "Фамилия, инициалы", "Должность",  "Аванс руб", "Всего к выплате" , ', () => {
    render(<PayrollItem {...dataWithAllValues} />);
    const nameColumn = screen.getByText(
      new RegExp(textLabels.payrollNameColumn, 'i')
    );
    const advanceColumn = screen.getByText(
      new RegExp(textLabels.advanceColumn, 'i')
    );
    const employeePositionColumn = screen.getByText(
      new RegExp(textLabels.employeePositionColumn, 'i')
    );
    const totalSalaryColumn = screen.getByText(
      new RegExp(textLabels.totalSalaryColumn, 'i')
    );
    expect(nameColumn).toBeInTheDocument();
    expect(advanceColumn).toBeInTheDocument();
    expect(employeePositionColumn).toBeInTheDocument();
    expect(totalSalaryColumn).toBeInTheDocument();
  });
  it('Если в данных аванса придёт undefined, то колонка не рендерится', () => {
    render(<PayrollItem {...dataWithoutAdvanceValue} />);
    const advanceColumn = screen.queryByText(
      new RegExp(textLabels.advanceColumn, 'i')
    );
    expect(advanceColumn).not.toBeInTheDocument();
  });
});
