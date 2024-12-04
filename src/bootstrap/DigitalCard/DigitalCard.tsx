import {
    CompanyName,
    ContactInfo,
    ContactItem,
    Footer,
    FullName,
    Header,
    Main,
    MoreInfoButton,
    PersonalInfo,
    Profession,
    Wrapper
} from "./DigitalCard.style";

export type DigitalCardProps = {
  companyName: string;
  fullName: string;
  profession: string;
  additionalInfo?: string;
  contact: Array<string>;
  moreInfoButton: Array<string>;
  websiteURL: string;
};

export function DigitalCard(props: DigitalCardProps) {
  const {
    companyName,
    fullName,
    profession,
    additionalInfo,
    contact,
    moreInfoButton,
    websiteURL,
  } = props;

  return (
    <Wrapper>
      <Header>
        <CompanyName>{companyName}</CompanyName>
      </Header>

      <Main>
      
        <PersonalInfo>
          <FullName>{fullName}</FullName>
          <Profession>{profession}</Profession>
          <Profession>{additionalInfo}</Profession>
        </PersonalInfo>

        <ContactInfo>
          {contact.map((item) => (
            <ContactItem>{item}</ContactItem>
          ))}
        </ContactInfo>

        <MoreInfoButton>
          {moreInfoButton[0]}
          <br/>
          {moreInfoButton[1]}
        </MoreInfoButton>

      </Main>

      <Footer>{websiteURL}</Footer>

    </Wrapper>
  );
}
