const SECURITY_TOKEN = '';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(SECURITY_TOKEN);
  return token ?? '';
};

export const setToken = (token: Token) => {
  localStorage.setItem(SECURITY_TOKEN, token);
};

export const dropToken = () => {
  localStorage.removeItem(SECURITY_TOKEN);
};
