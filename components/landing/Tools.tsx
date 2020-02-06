import styled from 'styled-components';

import media from 'styles/media';

const Tools = () => <Container>Tools</Container>;

export default Tools;

/*
 * Styled declarations
 */
const Container = styled.div`
    display: none;
    grid-area: tools;
    background-color: violet;

    ${media.laptop} {
        display: block;
    }
`;
