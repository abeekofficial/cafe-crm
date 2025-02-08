import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import type { Navigation } from '@toolpad/core/AppProvider';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArticleIcon from '@mui/icons-material/Article';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Asosiy',
  },
  {
    title: 'Asosiy',
    icon: <DashboardIcon />,
  },
  {
    segment: 'menu',
    title: 'Menyu',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'report',
    title: 'Hisobot',
    icon: <ArticleIcon />,
  },
  {
    segment: 'kitchen',
    title: 'Oshxona',
    icon: <StorefrontIcon />,
  },
  {
    kind: 'header',
    title: 'Sozlamalar',
  },
  {
    segment: 'room_table',
    title: 'Xona va Stol',
    icon: <TableRestaurantIcon />,
    children: [
      {
        segment: 'room',
        title: 'Xonalar',
        icon: <DashboardIcon />,
      },
      {
        segment: 'table',
        title: 'Stollar',
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    segment: 'food',
    title: 'Ovqatlar',
    icon: <FastfoodIcon />,
  },
  {
    segment: 'role',
    title: 'Xodimlar Boshqaruvi',
    icon: <ManageAccountsIcon />,
    children: [
      {
        segment: 'admin',
        title: 'Administrator',
        icon: <DashboardIcon />,
      },
      {
        segment: 'cashier',
        title: 'Kassa xodimi',
        icon: <DashboardIcon />,
      },
      {
        segment: 'waiter',
        title: 'Ofisiant',
        icon: <DashboardIcon />,
      },
    ],
  },

];

const BRANDING = {
  title: 'CAFE CRM',
};

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
