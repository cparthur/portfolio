import styled from 'styled-components';

// import media from 'styles/media';

const Tools = () => (
    <Container>
        <AsideText>Some tools I use</AsideText>
        <AsideTextBottom>Some tools I use</AsideTextBottom>
        <Design>Design</Design>
        <ScrollContainer>
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
            <Tool />
        </ScrollContainer>
    </Container>
);

export default Tools;

/*
 * Styled declarations
 */
const Container = styled.div`
    position: relative;
    height: 100%;
`;

const ScrollContainer = styled.div`
    max-height: 100%;
    overflow-y: scroll;
`;

const Tool = styled.div`
    width: 4rem;
    height: 4rem;
    margin: 0.5rem auto;
    background-color: ${({ theme }) => theme.colors.bg.sec};
`;

const AsideText = styled.p`
    position: absolute;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    color: ${({ theme }) => theme.colors.text.quar};
    transform: rotate(90deg);

    &:first-child {
        top: 2.5rem;
        right: -3.5rem;
    }
`;

const AsideTextBottom = styled(AsideText)`
    bottom: 2.5rem;
    left: -3.5rem;
    transform: rotate(-90deg);
`;

const Design = styled.p`
    position: absolute;
    top: -2rem;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.quar};
    text-transform: uppercase;
`;
