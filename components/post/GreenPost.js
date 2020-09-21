import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const Container = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  background-color: #4e746c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  color: var(--main-bg-yellow);
`;

const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 102%;
`;

export default function GreenPost({ post }) {
  return (
    <Container>
      <Title>{post.title}</Title>
      {ReactHtmlParser(post.text)}
    </Container>
  );
}
