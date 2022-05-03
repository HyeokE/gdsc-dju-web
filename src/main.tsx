import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ParallaxProvider>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 0 auto',
              minHeight: '100vh',
            }}
          >
            <App />
          </div>
        </ParallaxProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
