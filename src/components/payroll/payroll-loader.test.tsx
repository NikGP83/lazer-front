import { createPayrollLoader } from './create-payroll-loader';


describe('Поведение функции payrollLoader для предзагрузки данных из react-router', () => {
  const getPayrollData = jest.fn();
  const payrollLoader = createPayrollLoader({ getPayrollData });

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Выкидываю ошибку, если позвали без параметров', async () => {
    await expect(async () => await payrollLoader(undefined)).rejects.toThrowError();
  });
  it('Выкидывает исключение, если нет словарика params', async () => {
    const args = {
      noparams: 42
    };
    await expect(async () => await payrollLoader(args)).rejects.toThrowError();
  });
  it('выкидывает исключение, если в словарике нет ID', async () => {
    const args = {
      params: {}
    };
    await expect(async () => await payrollLoader(args)).rejects.toThrowError();
  });
  it('Вызывает специальный сервис с проверенным id', async () => {
    const args = {
      params: {
        id: '2022-12-01',
      }
    };
    await payrollLoader(args);
    expect(getPayrollData).toBeCalledWith({ id: '2022-12-01' });
  });
  it('кидает исключение если данные пустой массив', async () => {
    const emptyArr = [] as [];
    getPayrollData.mockResolvedValue(emptyArr);
    await expect(async() =>await payrollLoader()).rejects.toThrowError();
  });
  it('кидает исключение если данных нет/undefined', async () => {
    const noData = undefined;
    getPayrollData.mockReturnValue(noData);
    await expect(async() => await payrollLoader()).rejects.toThrowError();
  });
});


