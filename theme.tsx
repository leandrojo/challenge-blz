import 'styled-components';

const colors = {
  primaryLight: '#FF7800',
  primary: '#FF6C00',
  primaryDark: '#D45A00',
  gray: '#999',
  grayLight: '#CCC',
  grayExtraLight: '#EEE',
}

const theme = {
  backgroundColor: colors.grayExtraLight,
  colors,
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
