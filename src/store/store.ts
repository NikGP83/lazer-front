import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { portalAPI } from '../services/portal-services';

const rootReducer = combineReducers({
  [portalAPI.reducerPath]: portalAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(portalAPI.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
