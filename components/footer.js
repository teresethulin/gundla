import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 3vh 5vw;
  background-color: var(--main-bg-black);
  color: #fffcf1;
  width: 100vw;
  height: 474px;
  bottom: 0;

  @media (min-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 3vh 20vw;
  }
`;

const StyledFooterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
  width: 100%;
  height: 45vh;
  @media (min-width: 768px) {
    height: auto;
  }
`;

const StyledFooterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  margin: 1vh 0;
  color: #fffcf1;
  @media (min-width: 768px) {
    height: auto;
  }
`;

const StyledFooterLowerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 17vh;
  padding: 0;
  @media (min-width: 768px) {
    align-content: center;
    height: auto;
  }
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
const Bar = styled.div`
  width: 100%;
  height: 16px;
  background-color: var(--main-bg-green);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

const InfoICon = styled.img`
  width: 18px;
  margin-right: 10px;
`;

const Footer = ({ info, hours }) => {
  return (
    <>
      <Bar />
      <StyledFooter>
        <StyledFooterButtonContainer>
          <StyledFooterButton>
            <InfoICon src="/assets/Vector-6.png"></InfoICon>
            <a
              style={{ textDecoration: "underline" }}
              href={`tel:${info.phone_number}`}
            >
              {info.phone_number}
            </a>
          </StyledFooterButton>
          <StyledFooterButton>
            <InfoICon src="/assets/Vector-4.png"></InfoICon>
            <a
              style={{ textDecoration: "underline" }}
              href={`mailto:${info.email}`}
            >
              {info.email}
            </a>
          </StyledFooterButton>
          <StyledFooterButton>
            <InfoICon src="/assets/Vector-5.png"></InfoICon>
            <a style={{ textDecoration: "underline" }} href={info.address}>
              {info.address}
            </a>
          </StyledFooterButton>
        </StyledFooterButtonContainer>
        <StyledFooterLowerWrapper>
          {ReactHtmlParser(hours)}
          <StyledFooterUl>
            <li style={{ display: "flex", alignItems: "center", margin: 10 }}>
              <img
                style={{ marginRight: 10 }}
                src="/assets/instagram.png"
              ></img>
              <a href={info.instagram}>Instagram</a>
            </li>
            <li style={{ display: "flex", alignItems: "center", margin: 10 }}>
              <img style={{ marginRight: 10 }} src="/assets/facebook.png"></img>
              <a href={info.facebook}>Facebook</a>
            </li>
          </StyledFooterUl>
        </StyledFooterLowerWrapper>
      </StyledFooter>
    </>
  );
};

export default Footer;
