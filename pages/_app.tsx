import React from 'react';
import App, { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../theme';

const CustomGlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    transition:
      color 0.5s,
      background-color 0.5s,
      border-color 0.5s;
  }
`;

interface AppMiddlewareProps extends AppProps {}

export default class extends App<AppMiddlewareProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CustomGlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}