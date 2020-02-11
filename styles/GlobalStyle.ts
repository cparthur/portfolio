import { createGlobalStyle } from 'styled-components';

import media from 'styles/media';
import reset from './reset';

export default createGlobalStyle`
    ${reset}

    html {
        font-size: 16px;

        ${media.laptop} {
            font-size: 14px;
        }

        ${media.laptopM} {
            font-size: 16px;
        }

        ${media.desktop} {
            font-size: 20px;
        }
    }


    /* Custom styles*/
    body {
        font-family: ${({ theme }) => theme.fontFamilies.prim};
        color: ${({ theme }) => theme.colors.text.prim};
        line-height: ${({ theme }) => theme.lineHeights.body};
    }

    h1, h2 {
        line-height: ${({ theme }) => theme.lineHeights.heading};
    }
`;
