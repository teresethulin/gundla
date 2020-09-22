import styled from "styled-components";
import CateringMenuItem from "./CateringMenuItem";
import { DesktopDivCenter } from "../about/style";

const Container = styled.div`
  width: 100%;
  background-color: var(--main-bg-black);
  color: var(--main-text-white);
  padding: 32px 22px;
  margin: 12px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 102%;
  @media (min-width: 768px) {
    display: block;
    text-align: center;
    padding: 0px 10vw;
  }
`;

export default function CateringMenu({ menu }) {
  return (
    <Container>
      <Title>Menyförslag</Title>
      {menu.map((item) => {
        return (
          <DesktopDivCenter key={item.id}>
            <CateringMenuItem item={item} />
          </DesktopDivCenter>
        );
      })}
    </Container>
  );
}
