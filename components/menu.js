import Link from "next/link";
import styled from "styled-components";

const StyledBurger = styled.div`
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

const StyledBurgerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 93px;
  height: 34px;
  text-transform: none;
  position: absolute;
  right: 5vw;
  bottom: 1vh;
  border-radius: 2px;
  box-shadow: 2px 2px 1px 0px rgba(74, 74, 74, 0.4);
`;

const StyledNav = styled.nav`
  text-align: center;
  text-transform: none;
  height: 100vh;
  width: ${({ open }) => (open ? "100vw" : "0")};
  top: 210px;
  right: 0;
  overflow: hidden;
  transition: 0.4s;
  padding: ${({ open }) => (open ? "0 5vw" : "0")};
  position: absolute;
  background-color: #fcfcfc;

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

const StyledNavButton = styled.div`
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

const StyledNavLowerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 15vh;
  padding: 0;
  color: #35610c;
`;

const StyledNavUl = styled.ul`
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
      <StyledBurgerButton open={open} onClick={() => setOpen(!open)}>
        Meny
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledBurgerButton>

      <StyledNav open={open}>
        <ul className="button-container">
          <StyledNavButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/about" as="/about">
              <a>
                <h3>Om oss</h3>
              </a>
            </Link>
          </StyledNavButton>
          <StyledNavButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/menu" as="/meny">
              <a>
                <h3>Meny</h3>
              </a>
            </Link>
          </StyledNavButton>
          <StyledNavButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/catering" as="/catering">
              <a>
                <h3>Catering</h3>
              </a>
            </Link>
          </StyledNavButton>
          <StyledNavButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/events" as="/events">
              <a>
                <h3>Event</h3>
              </a>
            </Link>
          </StyledNavButton>
          <StyledNavButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/booking" as="/boka">
              <a>
                <h3>Bokningsförfrågan</h3>
              </a>
            </Link>
          </StyledNavButton>
          <StyledNavButton open={open} onClick={() => setOpen(!open)}>
            <Link href="/renting" as="/fest">
              <a>
                <h3>Fest | Bröllop | Kalas</h3>
              </a>
            </Link>
          </StyledNavButton>
        </ul>
        <StyledNavLowerWrapper>
          <StyledNavUl>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </StyledNavUl>
          <StyledNavUl>
            <li>Måndag - Stängt</li>
            <li>Tis-Fre - 11-17</li>
            <li>Lördag - 11-16</li>
            <li>Söndag - 12-16</li>
          </StyledNavUl>
        </StyledNavLowerWrapper>
      </StyledNav>
    </div>
  );
};

export default Menu;
