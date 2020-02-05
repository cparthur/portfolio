import styled from 'styled-components';
import media from 'styles/media';

type Types = {
    children?: React.ReactElement;
    isFullScreen?: boolean;
};

const Page = ({ children, isFullScreen }: Types) => (
    <PageContainer isFullScreen={isFullScreen}>
        <InnerContainer isFullScreen={isFullScreen}>{children}</InnerContainer>
    </PageContainer>
);

export default Page;

/*
 * Styled declarations
 */
interface StyledProps {
    isFullScreen?: boolean;
}

const PageContainer = styled.div<StyledProps>`
    position: relative;
    ${({ isFullScreen }) => (isFullScreen ? 'height: 100vh' : 'min-height: 100vh')};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.bg.pageGradient};

    ${media.laptop} {
        padding: 2rem;
    }
`;

const InnerContainer = styled.div<StyledProps>`
    position: relative;
    flex-grow: 1;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.bg.prim};
    ${({ isFullScreen }) => isFullScreen && 'overflow: hidden'};
    z-index: 1;

    ${media.laptop} {
        padding: 4rem;
    }
`;
