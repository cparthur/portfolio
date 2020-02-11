import { DefaultTheme } from 'styled-components';

const light = {
    colors: {
        black: '#000000',
        white: '#ffffff',
        text: {
            prim: '#504830',
            sec: '#9F8F60',
            ter: '#B8AC89',
            quar: '#D1C9B2',
        },
        bg: {
            prim: '#F9F9F5',
            sec: '#E2E2CF',
            pageGradient: 'linear-gradient(122.01deg, #FF9500 0%, #CC2500 100%);',
        },
        highlight: {
            gradient: 'linear-gradient(90deg, #FF9500 0%, #CC2500 100%)',
        },
    },
};

const defaultTheme = {
    fontFamilies: {
        prim: '"nunito", sans-serif',
        sec: 'sans-serif',
    },
    // Major Second modular scale system
    fontSizes: [
        '0.79rem', // 0 -> 12.64px
        '0.889rem', // 1 -> 14.22px
        '1rem', // 2 -> 16px
        '1.125rem', // 3 -> 18px
        '1.266rem', // 4 -> 20.25px
        '1.424rem', // 5 -> 22.78px
        '1.602rem', // 6 -> 25.63px
        '1.802rem', // 7 -> 28.83px
    ],
    fontWeights: {
        light: 300,
        regular: 400,
        bold: 700,
        black: 900,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.3,
    },
};

export const lightTheme: DefaultTheme = { ...defaultTheme, ...light };
