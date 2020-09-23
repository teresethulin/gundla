import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "imgOne imgOne"
    "imgTwo imgThree";
  gap: 10px;
`;
const Img = styled.img`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 1;
`;

export default function ImgGrid({ image }) {
  return (
    <Container>
      <Img style={{ gridArea: "imgOne" }} src={image[0].url} />
      <Img style={{ gridArea: "imgTwo" }} src={image[1].url} />
      <Img style={{ gridArea: "imgThree" }} src={image[2].url} />
    </Container>
  );
}
