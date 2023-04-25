interface TokenInfo {
  token: string;
}
type Api = () => Promise<TokenInfo>;
export const userAuth = async (api: Api) => {
  try {
    const {token} = await api();
    return token.length > 0;
  } catch (error) {
    return false;
  }
};
