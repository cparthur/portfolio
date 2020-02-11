import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: string;
            white: string;
            text: {
                prim: string;
                sec: string;
                ter: string;
                quar: string;
            };
            bg: {
                prim: string;
                sec: string;
                pageGradient: string;
            };
            highlight: {
                gradient: string;
            };
        };
        fontFamilies: {
            prim: string;
            sec: string;
        };
        fontSizes: string[];
        fontWeights: {
            light: number;
            regular: number;
            bold: number;
            black: number;
        };
        lineHeights: {
            body: number;
            heading: number;
        };
    }
}
