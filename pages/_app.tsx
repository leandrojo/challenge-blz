import React from 'react';
import App, { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';

import store from '../store';
import theme from '../theme';

const CustomGlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.fontFamily};
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

const persistor = getPersistor();

interface AppMiddlewareProps extends AppProps {}

class AppCustom extends App<AppMiddlewareProps> {
  render() {
    const { Component, pageProps } = this.props;

    console.log(this.props);

    return (
      <ThemeProvider theme={theme}>
        <CustomGlobalStyle />
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    )
  }
}

export default store.withRedux(AppCustom);