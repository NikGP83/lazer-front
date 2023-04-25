import { render, screen, waitFor } from '@testing-library/react';
import { createPortal } from './portal';
import userEvent from '@testing-library/user-event';
import {textLabels} from '../../const/const';
import { MonthlyReport } from '../monthly-report/monthly-report-di';


describe('Как должен выглядеть компонент Portal', () => {
  it('render компонента Portal без пропсов', () => {
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'firstTime',
    });
    const Portal1 = createPortal(usePortalActions, MonthlyReport );
    expect(() => render(<Portal1 />)).not.toThrow();
  });
  it('в компоненте должен быть input', () => {
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'firstTime',
    });
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    render(<Portal1 />);
    expect(screen.getByLabelText(textLabels.yourFile)).toBeInTheDocument();
  });
  it('в input должен быть placeholder с текстом "перетащите сюда файл или нажмите сюда чтобы выбрать"', () => {

    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'firstTime',
    });
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    render(<Portal1 />);
    expect(screen.getByPlaceholderText(textLabels.dropYourFile)).toBeInTheDocument();
  });

  it('кнопка  должна быть disabled при первом рендер', () => {
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'firstTime',
    });
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    render(<Portal1 />);
    expect(screen.getByText(textLabels.send)).toBeDisabled();
  });
  it('если вернёт ошибку то покажет в span', () => {
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'error',
      errorMessage: 'error',
    });
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    render(<Portal1 />);
    expect(screen.getByText(textLabels.errorMsg)).toBeInTheDocument();
  });
  it('после отправки данных отрендерит span с текстом "данные отправлены" ', () => {
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'sending-data',
      message: 'данные отправлены',
    });
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    render(<Portal1 />);
    expect(screen.getByText(textLabels.sending)).toBeInTheDocument();
  });
  it('после получения данных должен отрендерится компонент с таблицей', () => {
    const testMonthlyReport = () => <p>Месячный отчёт</p>;
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'received-data',
    });
    const Portal1 = createPortal(usePortalActions, testMonthlyReport);
    render(<Portal1 />);
    expect(screen.getByText(/Месячный отчёт/i)).toBeInTheDocument();
  });
  it('Проверка получения данных(массив) в input ', () => {
    const files = [
      new File(['report'], 'report.xls', { type: 'report/xls' }),
      new File(['report'], 'report.xls', { type: 'report/xls' }),
      new File(['report'], 'report.xls', { type: 'report/xls' }),
    ];
    const usePortalActions = jest.fn();
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    usePortalActions.mockReturnValue({
      mode: 'sending-data',
      message: 'данные отправлены',
    });
    render(<Portal1 />);
    const input = screen.getByLabelText<HTMLInputElement>(textLabels.yourFile);
    userEvent.upload(input, files);
    expect(input.files).toHaveLength(3);
  });
  it('Функция handleFiles содержит ', async () => {
    const files = [
      new File(['report'], 'report.xls', { type: 'report/xls' }),
      new File(['report'], 'report.xls', { type: 'report/xls' }),
      new File(['report'], 'report.xls', { type: 'report/xls' }),
    ];
    const labelText = 'Ваш excel file';
    const handleFiles = jest.fn();
    const usePortalActions = jest.fn();
    usePortalActions.mockReturnValue({
      mode: 'sending-data',
      message: 'данные отправлены',
      handleFiles
    });
    handleFiles(files);
    const Portal1 = createPortal(usePortalActions, MonthlyReport);
    render(<Portal1 />);
    const input = screen.getByLabelText<HTMLInputElement>(labelText);
    userEvent.upload(input, files);
    await waitFor(() => {expect(handleFiles).toBeCalledWith(files);});
  });
});
