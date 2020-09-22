import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const StyledCard = styled.section`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  background-color: #fffcf1;
  color: #35610c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);

  a {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 106%;
`;

export default function CardWelcome({ post }) {
  return (
    <StyledCard>
      <Title>{post.post_two.title}</Title>
      {ReactHtmlParser(post.post_two.text)}
      <a href="">Öppna karta</a>
    </StyledCard>
  );
}
