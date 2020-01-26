import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { lightTheme } from 'styles/theme';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default MyApp;
