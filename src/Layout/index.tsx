import React, { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';

import { ErrorBoundary } from 'react-error-boundary';
import Error from '../pages/Error';

const Pages = lazy(() => import('../pages'));
const Admin = lazy(() => import('../pages/Admin'));
const OnBoard = lazy(() => import('../pages/OnBoard'));
const Auth = lazy(() => import('../pages/Auth'));

const Layout = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<GoogleSpinner />}>
          <Routes>
            <Route path={'/*'} element={<Pages />} />
            <Route path={'/admin/*'} element={<Admin />} />
            {/*<Route path={'/onboard/*'} element={<OnBoard />} />*/}
            <Route path={'/auth/*'} element={<Auth />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
