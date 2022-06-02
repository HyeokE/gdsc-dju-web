import { theme } from '../styles/theme';

export const position = {
  frontend: theme.colors.googleBlue,
  backend: theme.colors.googleRed,
  android: theme.colors.googleGreen,
  beginner: theme.colors.orange900,
  designer: theme.colors.googleYellow,
  // ml: 'Machine Learning',
} as const;
export function positionColorHandler(input: string) {
  const positionKey = Object.keys(position);
  const inputToLowerCase = input.toLowerCase();
  let result = '#fff';
  positionKey.map((key) => {
    if (inputToLowerCase.includes(key)) {
      result = position[key as keyof typeof position];
    }
  });
  return result;
}
