import styled from 'styled-components';

import media from 'styles/media';

const LandingGrid = () => (
    <Grid>
        <Title>Arthur Molinos portfolio on develop</Title>
    </Grid>
);

export default LandingGrid;

/*
 * Styled declarations
 */
const Grid = styled.main`
    ${media.laptop} {
        display: grid;
        grid-template-columns: 40% 20% 40%;
        grid-template-rows: 50% 50%;
    }
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }: any) => theme.colors.text.primary};
    padding: 2rem;
    background-color: aquamarine;
`;
