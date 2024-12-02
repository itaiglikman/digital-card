import {
  AdditionalPersonalInfo,
  CompanyName,
  ContactInfo,
  ContactItem,
  Footer,
  FullName,
  Header,
  Main,
  PersonalInfo,
  Profession,
  Wrapper,
} from "./DigitalCard.style";

export type DigitalCardProps = {
  companyName: string;
  fullName: string;
  profession: string;
  additionalInfo?: string;
  contact: Array<string>;
  moreInfoButton: string;
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
          <AdditionalPersonalInfo>{additionalInfo}</AdditionalPersonalInfo>
        </PersonalInfo>
        {/*  <PersonalInfo>
          <FullName>{fullName}</FullName>
          <Profession>{profession}</Profession>
          <AdditionalInfo>{AdditionalInfo}</AdditionalInfo>
        </PersonalInfo>
        */}
        <ContactInfo>
          {contact.map((item) => (
            <ContactItem>{item}</ContactItem>
          ))}
        </ContactInfo>
        {/*<MoreInfoButton>
          {moreInfoButton}
        </MoreInfoButton>*/}
      </Main>
      <Footer>{websiteURL}</Footer>
    </Wrapper>
  );
}
