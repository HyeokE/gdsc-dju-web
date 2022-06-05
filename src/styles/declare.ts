import 'styled-components';
import { colors } from './colors';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';

export type myType = {
  colors: typeof colors;
  windowSize: typeof windowSize;
  fontSize: typeof fontSize;
};
