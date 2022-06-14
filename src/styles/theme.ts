import { windowSize } from './windowSize';
import { fontSize } from './fontSize';

import { lightColors } from './lightColors';
import { darkColors } from './darkColors';
import { DefaultTheme } from 'styled-components';

const isBrowserDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;
console.log(isBrowserDarkMode);

export const theme: DefaultTheme = {
  colors: isBrowserDarkMode ? darkColors : lightColors,
  windowSize: windowSize,
  fontSize: fontSize,
};
