import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  flex: 1;
  font-weight: bold;
  color: white;
  justify-content: left;
`;

export const CompanyName = styled.div`
  padding: 50px;
  color: white;
`;

export const Main = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PersonalInfo = styled.div`
  background: linear-gradient(90deg, #ffae00 0%, #d48013 100%);
  flex: 1;
  display: flex;
  color: black;
`;

export const FullName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const Profession = styled.div`
  font-size: 15px;
`;

export const AdditionalPersonalInfo = styled.div`
  font-size: 15px;
`;

export const ContactInfo = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  gap: 10px;
  color: white;
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
