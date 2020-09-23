import Link from "next/link";
import styled from "styled-components";

const Burger = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 1;
  position: relative;

  div {
    width: 18px;
    height: 3px;
    background: #000;
    transform-origin: 1px;
    transition: 0.4s;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MenuButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 93px;
  height: 34px;
  text-transform: none;
  border-radius: 2px;
  box-shadow: 2px 2px 1px 0px rgba(74, 74, 74, 0.4);
`;

const Nav = styled.nav`
  text-align: center;
  text-transform: none;
  height: 100vh;
  width: ${({ open }) => (open ? "100vw" : "0")};
  top: 150px;
  right: 0;
  overflow: hidden;
  transition: 0.4s;
  padding: ${({ open }) => (open ? "0 5vw" : "0")};
  position: absolute;
  background-color: #f1f1f1;
  color: var(--main-text-black);

  .button-container {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    margin-top: 2vh;
    height: 50%;
    transition: 0.2s;
    opacity: ${({ open }) => (open ? "1" : "0")};
  }
`;

const LinkButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4a4a4a;
  width: 100%;
  height: 42px;
  margin: 0;
  border-radius: 2px;
  border: 1px solid #6a6a6a;
  box-shadow: -1px -1px 4px 0px rgba(0, 0, 0, 0.3);
  z-index: 10;

  h3 {
    margin: 0;
  }
`;

const LowerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 15vh;
  padding: 0;
`;

const List = styled.ul`
  list-style: none;
  line-height: 1.4em;
  text-align: left;
  padding: 0;
  margin: 0;

  a {
    text-decoration: underline;
    font-family: "Harmattan";
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`;

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        Meny
        <Burger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burger>
      </MenuButton>

      <Nav open={open}>
        <ul className="button-container">
          <LinkButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/about" as="/about">
              <a>
                <h3>Om oss</h3>
              </a>
            </Link>
          </LinkButton>

          <LinkButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/menu" as="/meny">
              <a>
                <h3>Meny</h3>
              </a>
            </Link>
          </LinkButton>

          <LinkButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/catering" as="/catering">
              <a>
                <h3>Catering</h3>
              </a>
            </Link>
          </LinkButton>

          <LinkButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/events" as="/events">
              <a>
                <h3>Event</h3>
              </a>
            </Link>
          </LinkButton>

          <LinkButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/renting" as="/renting">
              <a>
                <h3>Fest | Bröllop | Kalas</h3>
              </a>
            </Link>
          </LinkButton>
        </ul>

        <LowerWrapper>
          <List>
            <li>Måndag - Stängt</li>
            <li>Tis-Fre - 11-17</li>
            <li>Lördag - 11-16</li>
            <li>Söndag - 12-16</li>
          </List>

          <List>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </List>
        </LowerWrapper>
      </Nav>
    </div>
  );
};

export default Menu;
