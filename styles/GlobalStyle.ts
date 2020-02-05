import { createGlobalStyle } from 'styled-components';

import media, { Sizes } from 'styles/media';
import reset from './reset';

const minFs = '16';
const maxFs = '20';

export default createGlobalStyle`
    ${reset}
    
    /* @font-face {
        font-family: 'custom-font';
        src: url('#') format('woff');
    } */


    /* Fluid typography */
    html {
        font-size: ${`${minFs}px`};

        ${media.mobileM} {
            font-size: ${`calc(${minFs}px + (${maxFs} - ${minFs}) * ((100vw - ${Sizes.mobileS}px) / (${Sizes.laptopL} - ${Sizes.mobileS})))`};
        }

        ${media.laptopL} {
            font-size: ${`${maxFs}px`};
        }
    }


    /* Custom styles*/

    h1 {
        font-family: 'nunito', sans-serif;
        font-weight: 400;
    }
`;
