import { useRecoilState } from 'recoil';
import { themeState } from '../store/theme';
import { useEffect } from 'react';

const SetTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme({ ...theme, light: !isBrowserDarkMode });
    // 이전 사용기록 세팅
  }, []);
  return null;
};
export default SetTheme;
