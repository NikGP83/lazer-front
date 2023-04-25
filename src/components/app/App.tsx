import { ElementType, useEffect } from 'react';
import { UserAuthHook } from '../../hooks/use-user-auth-di';
import { Outlet, useNavigate } from 'react-router-dom';

export const createApp = (
  useUserAuth: UserAuthHook,
  spinner: ElementType,
  authorizationUrl: string,
) => {
  function App() {
    const navigate = useNavigate();
    const Spinner = spinner;
    const authResult = useUserAuth();
    useEffect(() => {
      if (authResult === 'не авторизован') {
        navigate(authorizationUrl);
      }
    }, [authResult]);
    if (authResult === 'авторизован') {
      return <Outlet />;
    }

    return <Spinner />;
  }
  return App;
};
