import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { isTitle } from "../../functions/isTitle";
import { isEmail } from "../../functions/isEmail";

const Container = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  background-color: #4e746c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  color: var(--main-bg-yellow);
`;

export default function GreenPost({ post, children, email }) {
  return (
    <Container>
      {isTitle(post.title)}
      {ReactHtmlParser(post.text)}
      {children}
      {isEmail(email)}
    </Container>
  );
}
