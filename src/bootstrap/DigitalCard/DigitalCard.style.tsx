import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PersonalInfo = styled.div`
  background: linear-gradient(90deg, #ffae00 0%, #d48013 100%);
  flex: 2;
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FullName = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding:10px;
`;

export const Profession = styled.div`
  font-size: 15px;
`;

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: white;
  `;

export const ContactItem = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
  flex: 1;
`;

export const MoreInfoButton = styled.button`
    flex:1;
    background-color: transparent;
    border: 2px solid #ffae00;
    width: 80%;
    border-radius: 50px;    
    color: white;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
