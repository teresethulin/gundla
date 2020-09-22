import styled from "styled-components";
import CateringMenuItem from "./CateringMenuItem";

const Container = styled.div`
  width: 100%;
  background-color: var(--main-bg-yellow);
  color: var(--main-text-color);
  padding: 32px 22px;
  margin: 12px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 102%;
`;

export default function CateringMenu({ menu }) {
  return (
    <Container>
      <Title>Menyförslag</Title>
      {menu.map((item) => {
        return <CateringMenuItem key={item.id} item={item} />;
      })}
    </Container>
  );
}
