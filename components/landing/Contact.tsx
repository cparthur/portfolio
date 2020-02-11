import styled from 'styled-components';

import media from 'styles/media';

const Contact = () => (
    <>
        <Availability>
            I’m currently available for freelance project, would love to hear your new crazy idea. I can also join
            forces
        </Availability>
        <MailContainer>
            <Mail>arthur.molinos@gmail.com</Mail>
            <WorkTogether>Let's work together</WorkTogether>
            <MailIcon />
        </MailContainer>
    </>
);

export default Contact;

/*
 * Styled declarations
 */
const Availability = styled.div`
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    text-align: center;

    ${media.laptop} {
        width: 75%;
        margin-bottom: 0;
        font-size: ${({ theme }) => theme.fontSizes[1]};
        text-align: left;
    }
`;

const MailContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    ${media.laptop} {
        align-items: flex-end;
        flex-direction: row;
    }
`;

const Mail = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]};
    color: ${({ theme }) => theme.colors.text.ter};

    ${media.laptop} {
        font-size: ${({ theme }) => theme.fontSizes[0]};
    }

    ${media.desktop} {
        font-size: ${({ theme }) => theme.fontSizes[1]};
    }
`;

const WorkTogether = styled.p`
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes[3]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.prim};
    @supports (-webkit-background-clip: text) and (-webkit-text-fill-color: transparent) {
        background: ${({ theme }) => theme.colors.highlight.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ${media.laptop} {
        margin: 0 0 0 auto;
        font-size: ${({ theme }) => theme.fontSizes[2]};
    }
`;

const MailIcon = styled.div`
    display: none;
    width: 4rem;
    height: 4rem;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.bg.sec};

    ${media.laptop} {
        display: block;
    }
`;
