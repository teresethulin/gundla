import Link from "next/link";
import styled from "styled-components";
import Nav from "../components/nav";
import MenuButton from "../components/menubutton";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  width: 100vw;
  height: 207px;
  padding-top: 5vh;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`;

const Header = () => (
  <StyledHeader>
    <h2>
      <Link href="/">
        <a>Gundla gårdscafé</a>
      </Link>
    </h2>
    <h6>Ekologiskt • Vegetariskt • Musik • Sommar</h6>
    <MenuButton></MenuButton>
  </StyledHeader>
);

export default Header;
