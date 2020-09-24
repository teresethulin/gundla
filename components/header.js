import Link from "next/link";
import styled from "styled-components";
import Menu from "../components/menu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  width: 100%;
  height: 150px;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 10;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 120px;
  top: 0;
  z-index: 10;
  background-color: white;
  padding-top: 5vh;
  text-align: center;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);

  img {
    margin-left: 5vw;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 30px;
  background-color: var(--main-bg-green);
  font-size: 16px;
  letter-spacing: 0.04%;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    text-transform: uppercase;
    margin: 0;
  }
`;

const Header = () => (
  <Container>
    <StyledHeader>
      <Link href="/">
        <a>
          <img src="/assets/logo.svg" alt="logo" />
        </a>
      </Link>
      <Menu></Menu>
    </StyledHeader>
    <Bar>
      <h5>Ekologiskt • Vegetariskt • Musik • Sommar</h5>
    </Bar>
  </Container>
);

export default Header;
