import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layout/layout';
import WebSocketComponent from './pages/Login';
import { About, ErrorPage, Home } from './components';

const router = createBrowserRouter([
  {
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: Home,
          },
          {
            path: 'orders',
            Component: About,
          },
        ],
      },
      {
        path: '/login',
        Component: WebSocketComponent,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
