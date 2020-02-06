import styled from 'styled-components';

import media from 'styles/media';

const LandingGrid = () => (
    <Grid>
        <AboutMe>About me!</AboutMe>
        <Tools>Tools I use!</Tools>
        <References>Some of my references!</References>
        <Contact>arthur.molinos@gmail.com</Contact>
    </Grid>
);

export default LandingGrid;

/*
 * Styled declarations
 */
const Grid = styled.main`
    flex-grow: 1;

    ${media.laptop} {
        display: grid;
        grid-template-columns: 40% 20% 40%;
        grid-template-rows: 50% 50%;
        grid-template-areas:
            'about tools references'
            'about tools contact';
    }
`;

const AboutMe = styled.div`
    grid-area: about;
    background-color: red;
`;

const Tools = styled.div`
    display: none;
    grid-area: tools;
    background-color: violet;

    ${media.laptop} {
        display: block;
    }
`;

const References = styled.div`
    grid-area: references;
    background-color: green;
`;

const Contact = styled.div`
    grid-area: contact;
    background-color: blue;
`;
