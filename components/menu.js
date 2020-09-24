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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 325px;
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
  height: 20vh;
  padding: 0;

  @media (min-width: 768px) {
    width: 330px;
  }
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
    display: flex;
    flex-direction: row;
    font-size: 16px;
    line-height: 1.6em;
  }

  img {
    margin: 0 1vw 0 0;
    padding: 0;
  }
`;

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {console.log(open)}
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        {open ? "Stäng" : "Meny"}
        <Burger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </Burger>
      </MenuButton>

      <Nav open={open}>
        <ul className="button-container">
          <Link href="/menu" as="/meny">
            <a>
              <LinkButton open={open} onClick={() => setOpen(!open)}>
                <h3>Caféutbud</h3>
              </LinkButton>
            </a>
          </Link>

          <Link href="/events" as="/events">
            <a>
              <LinkButton open={open} onClick={() => setOpen(!open)}>
                <h3>Event</h3>
              </LinkButton>
            </a>
          </Link>

          <Link href="/catering" as="/catering">
            <a>
              <LinkButton open={open} onClick={() => setOpen(!open)}>
                <h3>Catering</h3>
              </LinkButton>
            </a>
          </Link>

          <Link href="/renting" as="/renting">
            <a>
              <LinkButton open={open} onClick={() => setOpen(!open)}>
                <h3>Abonnera</h3>
              </LinkButton>
            </a>
          </Link>

          <Link href="/about" as="/about">
            <a>
              <LinkButton open={open} onClick={() => setOpen(!open)}>
                <h3>Om oss | Kontakt</h3>
              </LinkButton>
            </a>
          </Link>
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
              <a href="https://www.instagram.com/gundlagardscafe/">
                <img src="/assets/instagram.svg" alt="Instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/gundlagardscafe/">
                <img src="/assets/facebook.svg" alt="Facebook" />
                Facebook
              </a>
            </li>
          </List>
        </LowerWrapper>
      </Nav>
    </div>
  );
};

export default Menu;
