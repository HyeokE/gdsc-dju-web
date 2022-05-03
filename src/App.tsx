import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './Layout';
import GoogleSpinner from './components/Lottie/GoogleSpinner';
import Alert from './components/common/Alert';
import Navigation from './components/common/navigation/DeskNavigation';
import { Footer } from './components/common/Footer';
import { useRecoilValue } from 'recoil';
import { loaderState } from './store/loader';
import GlobalStyles from './styles/globalStyles';

function App() {
  const loading = useRecoilValue(loaderState);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {loading.load && <GoogleSpinner background={true} />}
      <Alert />
      <Navigation />
      <Layout />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
