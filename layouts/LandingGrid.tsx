import styled from 'styled-components';

import media from 'styles/media';

type Props = {
    children: {
        about: React.ReactElement;
        tools: React.ReactElement;
        references: React.ReactElement;
        contact: React.ReactElement;
    };
};

const LandingGrid = ({ children }: Props) => (
    <Grid>
        <AboutContainer>{children.about}</AboutContainer>
        <ToolsContainer>{children.tools}</ToolsContainer>
        <ReferencesContainer>{children.references}</ReferencesContainer>
        <ContactContainer>{children.contact}</ContactContainer>
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
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-rows: 50% 50%;
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        grid-template-areas:
            'about tools references'
            'about tools contact';
    }
`;

const AboutContainer = styled.div`
    grid-area: about;
    background-color: red;
`;

const ToolsContainer = styled.div`
    display: none;
    grid-area: tools;
    background-color: violet;

    ${media.laptop} {
        display: block;
    }
`;

const ReferencesContainer = styled.div`
    grid-area: references;
    background-color: green;
`;

const ContactContainer = styled.div`
    grid-area: contact;
    background-color: blue;
`;
