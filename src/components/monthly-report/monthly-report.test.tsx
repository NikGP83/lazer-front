import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { gridOverlayText, textLabels } from '../../const/const';
import { mockPortalData } from '../../hooks/use-portal-actions';
import { mockData } from './monthly-data-mock';
import { createMonthlyReport } from './monthly-report';

const data = mockPortalData();
const data2 = mockData;

const monthStr = {
  date: '2022-12-09T00:00:00.000z',
};

describe('Исследую поведение компонента MonthlyReport', () => {
  it('Экземпляр компонента MonthlyReport должен отрендериться, в нём есть название месяца тестово это ISODate', () => {
    const useMonthlyServices = jest.fn();
    const sendMonthlyReport = jest.fn();
    useMonthlyServices.mockReturnValue(data2);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    const textLink = screen.getByText(monthStr.date);
    expect(textLink).toBeInTheDocument();
  });
  it('При рендере компонента MonthlyReport хук useMonthlyServices должен быть вызван', () => {
    const useMonthlyServices = jest.fn();
    const sendMonthlyReport = jest.fn();
    useMonthlyServices.mockReturnValue(data2);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    expect(useMonthlyServices).toHaveBeenCalled();
  });
  it('Хук useMonthlyServices вызывается с параметром', () => {
    const useMonthlyServices = jest.fn();
    const sendMonthlyReport = jest.fn();
    useMonthlyServices.mockReturnValue(data2);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    useMonthlyServices(data);
    expect(useMonthlyServices).toHaveBeenCalledWith(data);
  });
  it('Если массив данных Employee для строк пустой то напишет Нет данных для отображения', () => {
    const emptyArr = { rows: [], columns: [] };
    const sendMonthlyReport = jest.fn();
    const useMonthlyServices = jest.fn();
    useMonthlyServices.mockReturnValue(emptyArr);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    const emptyArrStr = screen.getByText(gridOverlayText.nothingToRender);
    expect(emptyArrStr).toBeVisible();
  });
  it('Данные верны тогда отрендерятся все колонки и строки, проверяем по колонке Имя', () => {
    const useMonthlyServices = jest.fn();
    const sendMonthlyReport = jest.fn();
    useMonthlyServices.mockReturnValue(data2);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    const employeeName = screen.getByText(/Имя/);
    expect(employeeName).toBeVisible();
  });
  it('Отрендерится кнопка c текстом Напечатать квитки', () => {
    const useMonthlyServices = jest.fn();
    const sendMonthlyReport = jest.fn();
    useMonthlyServices.mockReturnValue(data2);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    const btnSendToPrintName = screen.getByText(textLabels.print);
    expect(btnSendToPrintName).toBeVisible();
  });
  it('Имитирую нажатие на кнопку sendMonthlyReport', () => {
    const useMonthlyServices = jest.fn();
    const sendMonthlyReport = jest.fn();
    useMonthlyServices.mockReturnValue(data2);
    const MonthlyReport1 = createMonthlyReport(useMonthlyServices, textLabels);
    render(<MonthlyReport1 data={data} sendMonthlyReport={sendMonthlyReport} />);
    const btnSendToPrintName = screen.getByRole('button');
    userEvent.click(btnSendToPrintName);
    expect(sendMonthlyReport).toHaveBeenCalledTimes(1);
  });//todo
  // it('Fetch функция должна быть вызван с параметром', () => {
  //   const mockResponse = Promise.resolve({
  //     centerId: 'ГАГ',
  //     dateISO: '2022-12-01T00:00:00.000Z',
  //     employees: mockPayrollEmployees,
  //   });
  //   const mockFetchPromise = Promise.resolve({json: () => mockResponse});
  //   global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  //   expect(global.fetch).toBeCalledWith('https://jsonplaceholder.typicode.com/todos/1');
  // });
});
