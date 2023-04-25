import { useEffect, useState } from 'react';

type UseUserAuthResult = 'работаю' | 'не авторизован' | 'авторизован';

const url = '/';

export const createUserAuthHook = (myFetch: typeof fetch) => {
  const useUserAuth = (): UseUserAuthResult => {
    const [isLoading, setLoading] = useState<UseUserAuthResult>('работаю');
    useEffect(() => {
      let unMounted = false;
      const setLoadingSafe = (state: UseUserAuthResult) => {
        if (unMounted) {
          return;
        }
        setLoading(state);
      };
      (async () => {
        try {
          const response = await myFetch(url);
          if (response.ok) {
            setLoadingSafe('авторизован');
            return;
          }
          setLoadingSafe('не авторизован');
        } catch (error) {
          setLoadingSafe('не авторизован');
        }
      })();
      return () => {
        unMounted = true;
      };
    });
    return isLoading;
  };
  return useUserAuth;
};
