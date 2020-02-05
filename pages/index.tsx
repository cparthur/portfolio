import styled from 'styled-components';

import Page from 'layouts/Page';
import media from 'styles/media';

const Index = () => (
    <Page>
        <Main>
            <Title>Arthur Molinos portfolio</Title>
        </Main>
    </Page>
);

export default Index;

/*
 * Styled declarations
 */
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }: any) => theme.colors.text.primary};
    padding: 2rem;
    background-color: aquamarine;

    ${media.laptop} {
        font-family: sans-serif;
    }
`;
