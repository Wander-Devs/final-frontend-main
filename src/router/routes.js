import { Navigate, useRoutes } from 'react-router-dom';
import { getCurrentUser } from '../services/auth';
import HomePage from '../pages/home/HomePage';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import SimpleLayout from '../layouts/simple';
import LoginPage from '../pages/auth/LoginPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import Page404 from '../pages/not-found/Page404';
import { admin } from './admin';
import { farmer } from './farmer';
import { supplier } from './supplier';
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import TipsAndTutorials from '../pages/tips-tutorials/TipsAndTutorials';

export default function Router() {
  const children = () => {
    if (getCurrentUser()) {
      if (getCurrentUser().data.type === 'admin') return admin;
      if (getCurrentUser().data.type === 'supplier') return supplier;
      if (getCurrentUser().data.type === 'farmer') return farmer;
    }
    return [];
  };

  const routes = useRoutes([
    {
      path: '/',
      element: getCurrentUser() ? <DashboardLayout /> : <Navigate to="home" />,
      children: children(),
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegistrationPage />,
    },
    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'contact',
      element: <ContactPage />,
    },
    {
      path: 'farmingtips',
      element: <TipsAndTutorials />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
