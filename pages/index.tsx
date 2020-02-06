import LandingGrid from 'layouts/LandingGrid';
import Page from 'layouts/Page';

import About from 'components/landing/About';
import Contact from 'components/landing/Contact';
import References from 'components/landing/References';
import Tools from 'components/landing/Tools';

const Index = () => (
    <Page isFullScreen>
        <LandingGrid>
            {{
                about: <About />,
                tools: <Tools />,
                references: <References />,
                contact: <Contact />,
            }}
        </LandingGrid>
    </Page>
);

export default Index;
