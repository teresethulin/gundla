import styled from "styled-components";
import Burger from "../components/burger";

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

const MenuButton = () => (
  <StyledButton>
    Meny <Burger></Burger>
  </StyledButton>
);

export default MenuButton;
