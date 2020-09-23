import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const Container = styled.section`
  width: 100%;
  background-color: var(--main-bg-black);
  color: var(--main-text-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vh 0 3vh;
`;

const Title = styled.p`
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Hours = styled.div`
  text-transform: uppercase;
  list-style: none;
  text-align: center;
  padding: 0;
  font-weight: 600;
  line-height: 162%;
  letter-spacing: 0.04%;

  p {
    font-family: "Harmattan";
  }
`;

const OpeningHours = ({ hours }) => (
  <Container>
    <Title>Öppettider</Title>
    <Hours>{ReactHtmlParser(hours.hours)}</Hours>
  </Container>
);

export default OpeningHours;
