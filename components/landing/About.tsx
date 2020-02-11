import styled from 'styled-components';

import media from 'styles/media';

import Github from 'components/logos/Github';
import LinkedIn from 'components/logos/LinkedIn';

const About = () => (
    <>
        <Hey>Hey 👋</Hey>
        <Title>I’m UI Designer, Front-end developer, Entrepreneur and Surfer.</Title>
        <SubTitle>I design captivating, functional interfaces that solve people’s and business problems.</SubTitle>
        <Desc>
            Originated from bask country, I moved to lisbon I join the Krak team as UI/UX designer and front-end
            developer to participate to the 2018 Techstars program in Boulder, Colorado. I've learned a lot about
            early-stage startups; building an efficient team work and how to launch a digital product.
        </Desc>
        <Actions>
            <Action href="https://github.com/cparthur" target="_blank" rel="noopener">
                <Github />
            </Action>
            <Action href="https://www.linkedin.com/in/arthur-molinos" target="_blank" rel="noopener">
                <LinkedIn />
            </Action>
        </Actions>
    </>
);

export default About;

/*
 * Styled declarations
 */
const Hey = styled.p`
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes[5]};
`;

const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.fontSizes[5]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const SubTitle = styled.h2`
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSizes[3]};
`;

const Desc = styled.p`
    color: ${({ theme }) => theme.colors.text.ter};
`;

const Actions = styled.div`
    display: flex;
    margin-top: 2rem;

    ${media.laptop} {
        margin-top: auto;
    }

    ${media.laptopM} {
        justify-content: flex-end;
    }
`;

const Action = styled.a`
    display: inline-block;
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 1rem;

    &:first-child {
        margin-left: 0;
    }

    & svg {
        width: 100%;
        height: 100%;
        fill: ${({ theme }) => theme.colors.text.sec};
    }

    ${media.laptop} {
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 0.75rem;
    }
`;
