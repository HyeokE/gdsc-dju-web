import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  AlertInner,
  AlertInnerWrapper,
  AlertText,
  AlertWrapper,
} from './styled';
import { alertState } from '../../../store/alert';
import './Alert.css';
import { AnimatePresence } from 'framer-motion';

const variants = {
  active: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  unActive: {
    opacity: 0,
    scale: 0,
  },
};
const Alert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert({
        ...alert,
        alertHandle: false,
      });
      clearTimeout(alertTimer);
    }, 4000);
  }, []);

  return (
    <AnimatePresence>
      <AlertWrapper>
        {alert.alertHandle && (
          <AlertInner
            variants={variants}
            exit={'unActive'}
            animate={'active'}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertInnerWrapper className={alert.alertStatus}>
              <AlertText>{alert.alertMessage}</AlertText>
            </AlertInnerWrapper>
          </AlertInner>
        )}
      </AlertWrapper>
    </AnimatePresence>
  );
};

export default Alert;
