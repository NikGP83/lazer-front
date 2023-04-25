import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { App } from './components/app/app-di';
import { Portal } from './components/portal/portal-di';
import { Payroll } from './components/payroll/payroll-di';
import { payrollLoader } from './components/payroll/payroll-loader-di';
import { fileUploadInputAction } from './components/file-upload-input/file-upload-input';
import { FileUploadInput } from './components/file-upload-input/file-upload-input-di';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


export const store = setupStore();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Portal />,
      },
      {
        path: 'upload-file',
        element: <FileUploadInput />,
        action: fileUploadInputAction,
      },
      {
        path: 'payroll/:id',
        element: <Payroll />,
        loader: payrollLoader,
      },
      {
        path: 'login',
        element: <div>Страница авторизации</div>
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
