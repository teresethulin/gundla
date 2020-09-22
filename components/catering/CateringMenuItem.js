import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const Conatiner = styled.div`
  width: 100%;
  margin: 60px 0px;
  @media (min-width: 768px) {
    display: block;
    text-align: left;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 142%;
  margin-bottom: 0px;
  margin-top: 10px;
`;

export default function CateringMenuItem({ item }) {
  return (
    <Conatiner>
      <Image src={item.image.url} />
      <Title>{item.title}</Title>
      {ReactHtmlParser(item.text)}
    </Conatiner>
  );
}
