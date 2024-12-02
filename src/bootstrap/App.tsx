import { Wrapper } from './App.style';
import { DigitalCard } from './DigitalCard';

export const App = () => {
  return (
    <Wrapper>
      <DigitalCard name='James' age={20}></DigitalCard>
    </Wrapper>
  );
};
