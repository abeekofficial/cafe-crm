import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Layout from './layout/layout';
import Home from './components/Home';
import About from './components/About';
import WebSocketComponent from './pages/Login';

const router = createBrowserRouter([
  {
    Component: App,
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
