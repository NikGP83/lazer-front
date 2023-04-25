import {createUserAuthHook} from './use-user-auth';

export const useUserAuth = createUserAuthHook(fetch);
export type UserAuthHook = typeof useUserAuth;
