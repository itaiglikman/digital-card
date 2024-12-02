import { Wrapper } from './App.style';

export type DigitalCardProps = {
  name: string;
  age: number;
};

export function DigitalCard(props: DigitalCardProps) {
  const { name, age } = props;

  return (
    <Wrapper>
      Hello {name}! How are you doing? Your age is {age}!!!
    </Wrapper>
  );
}
