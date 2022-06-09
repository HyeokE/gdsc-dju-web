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
import Modal from './components/common/Modal';
import { alertState } from './store/alert';
import { AnimatePresence } from 'framer-motion';

function App() {
  const loading = useRecoilValue(loaderState);
  const [footer, setFooter] = useState(true);
  const [alert, setAlert] = useRecoilState(alertState);
  const location = useLocation();
  useEffect(() => {
    location.pathname === '/' ? setFooter(false) : setFooter(true);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Alert />
      <GoogleSpinner background={true} />
      <Modal />
      <Navigation />
      <Layout />
      {footer && <Footer />}
    </ThemeProvider>
  );
}

export default App;
