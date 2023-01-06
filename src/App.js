import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Router from './router/routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <StyledChart />
      <Routes>
        <Route path="/" exact element={<Navigate to="/home" />} />
        <Route path="*" element={<Router />} />
      </Routes>
    </ThemeProvider>
  );
}
