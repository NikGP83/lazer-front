import { App } from './app-di';
import { render, screen, waitFor } from '@testing-library/react';
import { createApp } from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from '@remix-run/router';

describe('Описание поведения компонента App', () => {
  it('Отрисовывается, без использования пропсов', () => {
    const history = createMemoryHistory();
    expect(() => render(
      <Router location={'/'} navigator={history}>
        <App />
      </Router>
    )).not.toThrow();
  });
  it('Вызывает функцию useUserAuth', () => {
    const history = createMemoryHistory();
    const useUserAuth = jest.fn();
    const App1 = createApp(useUserAuth, 'span', 'div');
    render(
      <Router location={'/'} navigator={history}>
        <App1 />
      </Router>
    );
    expect(useUserAuth).toHaveBeenCalledTimes(1);
  });
  it('если useUserAuth вернёт состояние "работаю" то на экране отрендерит спиннер', () => {
    const history = createMemoryHistory();
    const useUserAuth = jest.fn();
    useUserAuth.mockReturnValue('работаю');
    const title = 'работаю';
    const Spinner = () => <span title={title}></span>;
    const App1 = createApp(useUserAuth, Spinner, 'div');
    render(
      <Router location={'/'} navigator={history}>
        <App1 />
      </Router>
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });
  it('если useUserAuth вернёт состояние "не авторизован" то перенаправит на адрес', async() => {
    const authorizationUrl = '/goo';
    const useUserAuth = jest.fn();
    useUserAuth.mockReturnValue('не авторизован');
    const App1 = createApp(useUserAuth, 'span', authorizationUrl);
    const history = createMemoryHistory();
    render(
      <Router location={'/'} navigator={history}>
        <App1 />
      </Router>
    );
    await waitFor(() => expect(history.location.pathname).toBe(authorizationUrl));
  });
});
