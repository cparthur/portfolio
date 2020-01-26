import styled from 'styled-components';

import media from 'styles/media';

const Main = styled.main`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }: any) => theme.bg.primary};
`;

const Title = styled.h1`
    font-size: 2rem;
    color: ${({ theme }: any) => theme.text.primary};

    ${media.laptop} {
        font-family: sans-serif;
    }
`;

const Index = () => (
    <Main>
        <Title>Arthur Molinos portfolio</Title>
    </Main>
);

export default Index;
