import styled from 'styled-components';

import media from 'styles/media';

const referencesList = [
    {
        company: 'The Punk club',
        links: [
            {
                url: 'http://thepunk.club/',
                display: 'thepunk.club',
            },
        ],
        desc: 'Design & Front-end',
    },
    {
        company: 'Krak',
        links: [
            {
                url: 'https://skatekrak.com/',
                display: 'skatekrak.com',
            },
            {
                url: 'http://krakmap.com/',
                display: 'krakmap.com',
            },
        ],
        desc: 'Design & Front-end',
    },
    {
        company: 'Krak Session',
        links: [
            {
                url: 'https://apps.apple.com/us/app/krak-session/id1466105913',
                display: 'Apple store',
            },
        ],
        desc: 'Mobile design',
    },
    {
        company: 'I Love Climbing',
        links: [
            {
                url: 'https://iloveclimbing.co/shop',
                display: 'Shop',
            },
            {
                url: 'https://iloveclimbing.co/awesome',
                display: 'Awesome Maps',
            },
        ],
        desc: 'Design & Front-end',
    },
];

const references = () => (
    <>
        <Title>Reference</Title>
        <References>
            {referencesList.map((reference) => (
                <Reference key={reference.company}>
                    <Company>{reference.company}</Company>
                    <LinkContainer>
                        {reference.links.map((link) => (
                            <Link href={link.url} key={link.display} target="_blank" rel="noopener">
                                {link.display}
                            </Link>
                        ))}
                    </LinkContainer>
                    <Desc>{reference.desc}</Desc>
                </Reference>
            ))}
        </References>
    </>
);

export default references;

/*
 * Styled declarations
 */
const Title = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes[1]};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.sec};
`;

const References = styled.div`
    margin-top: 2rem;

    ${media.laptopM} {
        margin-bottom: 1.3rem;
    }
`;

const Reference = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    padding: 1rem 0;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.bg.sec};

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
        border: none;
    }

    ${media.laptop} {
        padding: 0.5rem 0;
    }
`;

const Company = styled.p`
    margin-right: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const LinkContainer = styled.div`
    order: 2;
    width: 100%;

    ${media.tablet} {
        order: 1;
        width: inherit;
    }
`;

const Link = styled.a`
    margin-right: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.text.sec};
    text-decoration: underline;

    &:last-child {
        margin-right: 0;
    }
`;

const Desc = styled.p`
    order: 1;
    font-size: ${({ theme }) => theme.fontSizes[0]};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-style: italic;
    color: ${({ theme }) => theme.colors.text.ter};

    ${media.tablet} {
        order: 2;
        margin-left: auto;
    }
`;
