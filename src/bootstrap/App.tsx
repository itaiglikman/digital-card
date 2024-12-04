import { Wrapper } from './App.style';
import { DigitalCard } from './DigitalCard/DigitalCard';

// image address: https://i.ytimg.com/vi/lP0AuT29Xms/maxresdefault.jpg


export const App = () => {


    const contacts = ['whatsapp', 'call', 'email', 'web'];
    const moreInfoButton = ["click here", "for more information"];
    return (
        <Wrapper>
            <DigitalCard
                companyName='graphix planet'
                fullName='rebeeh parammal'
                profession='graphic designer'
                additionalInfo='digital artist'
                contact={contacts}
                moreInfoButton={moreInfoButton}
                websiteURL='https://www.graphixplanet.com'
            />
        </Wrapper>
    );
};
