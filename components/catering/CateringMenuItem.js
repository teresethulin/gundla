import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const Conatiner = styled.div`
  width: 100%;
  margin: 60px 0px;
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
const Desc = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 142%;
  margin-top: -1em;
`;

export default function CateringMenuItem({ item }) {
  console.log(item);
  return (
    <Conatiner>
      <Image src={item.image.url} />
      <Title>{item.title}</Title>
      <Desc>{ReactHtmlParser(item.text)}</Desc>
    </Conatiner>
  );
}
