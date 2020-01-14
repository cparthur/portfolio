import { createGlobalStyle } from 'styled-components';

import reset from './reset';

export default createGlobalStyle`
    ${reset}
    
    @font-face {
        font-family: 'custom-font';
        src: url('#') format('woff');
    }

    /* Custom here */
    body {
        font-size: 16px;
    }
`;
