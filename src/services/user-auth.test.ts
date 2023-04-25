import {userAuth} from './user-auth';

describe('Поведение функции userAuth', () => {

  it('я буду вызывать эту функцию что бы понять авторизован или нет, если пользователь авторизован она вернёт true', async() => {
    const api = jest.fn();
    api.mockResolvedValue({token: 'abc'});
    const result = await userAuth(api);
    expect(result).toBe(true);
  });
  it('функция userAuth должна вернуть false если пользователь не авторизован', async () => {
    const api = jest.fn();
    const result = await userAuth(api);
    expect(result).toBeFalsy();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
