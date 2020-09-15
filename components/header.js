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
<<<<<<< HEAD
    <h6>Ekologiskt • Vegetariskt • Musik • Sommar</h6>
    <MenuButton></MenuButton>
  </StyledHeader>
=======
    <nav>
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
          <Link href="/events" as="/events">
            <a>Events</a>
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
    </nav>
  </div>
>>>>>>> events
);

export default Header;
