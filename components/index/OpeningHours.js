import styled from "styled-components";

const StyledHours = styled.section`
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

const List = styled.ul`
  text-transform: uppercase;
  list-style: none;
  text-align: center;
  padding: 0;
  font-weight: 600;
  line-height: 162%;
  letter-spacing: 0.04%;

  li {
    font-family: "Harmattan";
  }
`;

const OpeningHours = () => (
  <StyledHours>
    <Title>Öppettider</Title>
    <List>
      <li>måndag • stängt</li>
      <li>tis-fre • 11-17</li>
      <li>lördag • 11-16</li>
      <li>söndag • 12-16</li>
    </List>
  </StyledHours>
);

export default OpeningHours;
