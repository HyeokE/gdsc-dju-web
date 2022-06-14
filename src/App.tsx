import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import GoogleSpinner from './components/Lottie/GoogleSpinner';
import Alert from './components/common/Alert';
import Navigation from './components/common/navigation/DeskNavigation';
import { Footer } from './components/common/Footer';
import GlobalStyles from './styles/globalStyles';
import { useLocation } from 'react-router';
import Modal from './components/common/Modal';
import SetTheme from './hooks/setTheme';
import { theme } from './styles/theme';

function App() {
  const [footer, setFooter] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname === '/' ? setFooter(false) : setFooter(true);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SetTheme />
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
