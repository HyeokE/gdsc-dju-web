import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './Layout';
import GoogleSpinner from './components/Lottie/GoogleSpinner';
import Alert from './components/common/Alert';
import Navigation from './components/common/navigation/DeskNavigation';
import { Footer } from './components/common/Footer';
import { useRecoilState, useRecoilValue } from 'recoil';
import { loaderState } from './store/loader';
import GlobalStyles from './styles/globalStyles';
import { useLocation } from 'react-router';
import axios from 'axios';

function App() {
  const loading = useRecoilValue(loaderState);
  const [footer, setFooter] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname === '/' && setFooter(false);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {loading.load && <GoogleSpinner background={true} />}
      <Alert />
      <Navigation />
      <Layout />
      {footer && <Footer />}
    </ThemeProvider>
  );
}

export default App;
