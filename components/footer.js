import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 3vh 5vw;
  background-color: #4e746c;
  color: #fffcf1;
  width: 100vw;
  height: 474px;
  bottom: 0;
`;

const StyledFooterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
  width: 100%;
  height: 45vh;
`;

const StyledFooterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  margin: 2vh 0;
  border-radius: 2px;
  border: 1px solid #fffcf1;
  color: #fffcf1;
  box-shadow: -1px -1px 3px 0px rgba(0, 0, 0, 0.3);
`;

const StyledFooterLowerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 17vh;
  padding: 0;
`;

const StyledFooterUl = styled.ul`
  list-style: none;
  line-height: 1.4em;
  padding: 0;
  margin: 0;

  a {
    text-decoration: underline;
    font-family: "Harmattan";
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledFooterButtonContainer>
      <StyledFooterButton>
        <a href="">Kontakta oss (Ring)</a>
      </StyledFooterButton>
      <StyledFooterButton>
        <a href="">Kontakta oss (Mail)</a>
      </StyledFooterButton>
      <StyledFooterButton>
        <a href="">Hitta hit (Google Maps)</a>
      </StyledFooterButton>
    </StyledFooterButtonContainer>
    <StyledFooterLowerWrapper>
      <StyledFooterUl>
        <li>Måndag Stängt</li>
        <li>Tis-Fre 11-17</li>
        <li>Lördag 11-16</li>
        <li>Söndag 12-16</li>
      </StyledFooterUl>
      <StyledFooterUl>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Facebook</a>
        </li>
      </StyledFooterUl>
    </StyledFooterLowerWrapper>
  </StyledFooter>
);

export default Footer;
