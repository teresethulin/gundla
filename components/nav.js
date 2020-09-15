import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  text-align: center;
  text-transform: none;
  height: 100vh;
  width: 50vw;
  background-color: wheat;
  top: 0;
  position: absolute;
  z-index: 15;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
  }
`;

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link href="/about" as="/about">
          <a>Om oss</a>
        </Link>
      </li>
      <li>
        <Link href="/booking" as="/boka">
          <a>Bokningsförfrågan</a>
        </Link>
      </li>
      <li>
        <Link href="/catering" as="/catering">
          <a>Catering</a>
        </Link>
      </li>
      <li>
        <Link href="/event" as="/event">
          <a>Event</a>
        </Link>
      </li>
      <li>
        <Link href="/menu" as="/meny">
          <a>Meny</a>
        </Link>
      </li>
      <li>
        <Link href="/renting" as="/fest">
          <a>Fest och bröllop</a>
        </Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
