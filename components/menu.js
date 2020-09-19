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

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40%;
    transition: 0.2s;
    opacity: ${({ open }) => (open ? "1" : "0")};
  }

  h3 {
    margin: 0;
  }
`;

const StyledButton = styled.div`
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

const Menu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <StyledButton open={open} onClick={() => setOpen(!open)}>
        Meny
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledButton>

      <StyledNav open={open}>
        <ul>
          <li open={open} onClick={() => setOpen(!open)}>
            <Link href="/about" as="/about">
              <a>
                <h3>Om oss</h3>
              </a>
            </Link>
          </li>
          <li open={open} onClick={() => setOpen(!open)}>
            <Link href="/booking" as="/boka">
              <a>
                <h3>Bokningsförfrågan</h3>
              </a>
            </Link>
          </li>
          <li open={open} onClick={() => setOpen(!open)}>
            <Link href="/catering" as="/catering">
              <a>
                <h3>Catering</h3>
              </a>
            </Link>
          </li>
          <li open={open} onClick={() => setOpen(!open)}>
            <Link href="/events" as="/events">
              <a>
                <h3>Event</h3>
              </a>
            </Link>
          </li>
          <li open={open} onClick={() => setOpen(!open)}>
            <Link href="/menu" as="/meny">
              <a>
                <h3>Meny</h3>
              </a>
            </Link>
          </li>
          <li open={open} onClick={() => setOpen(!open)}>
            <Link href="/renting" as="/fest">
              <a>
                <h3>Fest och bröllop</h3>
              </a>
            </Link>
          </li>
        </ul>
      </StyledNav>
    </div>
  );
};

export default Menu;
