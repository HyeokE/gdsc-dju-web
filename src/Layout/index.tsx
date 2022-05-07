import React, { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';

import { ErrorBoundary } from 'react-error-boundary';
import Pages from '../pages';
import Auth from '../pages/Auth';
import Error from '../pages/Error';
import Admin from '../pages/Admin';
import Alert from '../components/common/Alert';
import { useRecoilValue } from 'recoil';
import { loaderState } from '../store/loader';

const Layout = () => {
  const loading = useRecoilValue(loaderState);
  return (
    <>
      {loading.load && <GoogleSpinner background={true} />}
      <Alert />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<GoogleSpinner />}>
          <Routes>
            <Route path={'/*'} element={<Pages />} />
            <Route path={'/admin/*'} element={<Admin />} />
            <Route path={'/auth/*'} element={<Auth />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
