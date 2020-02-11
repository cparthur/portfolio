import React, { useLayoutEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import media, { Sizes } from 'styles/media';

type Props = {
    children: {
        about: React.ReactElement;
        tools: React.ReactElement;
        references: React.ReactElement;
        contact: React.ReactElement;
    };
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return windowSize;
};

const LandingGrid = ({ children }: Props) => {
    const targetRef = useRef<any>(null);

    const [windowWidth, windowHeight] = useWindowSize();

    useLayoutEffect(() => {
        // Compute Grid height
        const innerContainer = document.getElementById('inner-container');
        const header = document.getElementById('header') as any;

        if (innerContainer && header) {
            const containerHeight = innerContainer.clientHeight;
            const containerPadding =
                parseInt(window.getComputedStyle(innerContainer).getPropertyValue('padding'), 10) * 2;

            const headerBottomMargin = window.getComputedStyle(header).marginBottom;
            const headerHeight = header.clientHeight + parseInt(headerBottomMargin, 10);

            const computedGridHeight = containerHeight - containerPadding - headerHeight;

            if (windowWidth > Sizes.laptop) {
                targetRef.current.style.maxHeight = `${computedGridHeight}px`;
            } else {
                targetRef.current.style.maxHeight = 'inherit';
            }
        }
    }, [windowWidth, windowHeight]);

    return (
        <Grid ref={targetRef}>
            <AboutContainer>{children.about}</AboutContainer>
            <ToolsContainer>{children.tools}</ToolsContainer>
            <ReferencesContainer>{children.references}</ReferencesContainer>
            <ContactContainer>{children.contact}</ContactContainer>
        </Grid>
    );
};

export default LandingGrid;

/*
 * Styled declarations
 */
interface StyledProps {
    ref: any;
}

const Grid = styled.main<StyledProps>`
    flex-grow: 1;
    max-width: 76rem;
    margin: 0 auto;

    ${media.laptop} {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        grid-template-areas:
            'about tools references'
            'about tools contact';
    }
`;

const AboutContainer = styled.div`
    grid-area: about;
    display: flex;
    flex-direction: column;
`;

const ToolsContainer = styled.div`
    display: none;
    grid-area: tools;

    ${media.laptop} {
        display: block;
    }
`;

const ReferencesContainer = styled.div`
    grid-area: references;
    margin: 3rem 0;

    ${media.laptop} {
        margin: 0;
    }
`;

const ContactContainer = styled.div`
    grid-area: contact;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2rem;

    ${media.laptop} {
        margin: 0;
    }
`;
