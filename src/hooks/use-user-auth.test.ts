import { renderHook, waitFor } from '@testing-library/react';
import { createUserAuthHook } from './use-user-auth';

describe('поведение пользовательского хука авторизации', () => {
  it('если запрос на сервер ещё не завершился вернёт значение работаю', () => {
    const myFetch = jest.fn();
    const useUserAuth = createUserAuthHook(myFetch);
    myFetch.mockReturnValue('работаю');
    const { result, unmount } = renderHook(() => useUserAuth());
    expect(result.current).toBe('работаю');
    unmount();
  });
  it('если запрос на сервер отправлен и ответ получен с ошибкой то вернёт не авторизован', () => {
    const myFetch = jest.fn();
    const useUserAuth = createUserAuthHook(myFetch);
    const { result, unmount } = renderHook(() => useUserAuth());
    waitFor(() => {expect(result.current).toBe('не авторизован');});
    unmount();
  });

  it('если запрос на сервер отправлен и ответ вернёт авторизован', async() => {
    const response = {ok: true} as Response;
    const myFetch = jest.fn();
    myFetch.mockResolvedValue(response);
    const useUserAuth = createUserAuthHook(myFetch);
    const { result, unmount } = renderHook(() => useUserAuth());
    await waitFor(() => {expect(result.current).toBe('авторизован');});
    unmount();
  });
  afterEach(() => jest.clearAllMocks());
});
