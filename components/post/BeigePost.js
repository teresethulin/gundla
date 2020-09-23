import styled from "styled-components";
import { isEmail } from "../../functions/isEmail";
import ReactHtmlParser from "react-html-parser";

const Container = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 0px;
  background-color: #fffcf1;
  color: #35610c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 102%;
`;
const Bar = styled.div`
  width: 100%;
  height: 16px;
  background-color: var(--main-bg-black);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export default function BeigePost({ post, mail }) {
  return (
    <>
      <Bar />
      <Container>
        <Title>{post.title}</Title>
        <div>
          {ReactHtmlParser(post.text)}
          {isEmail(mail)}
        </div>
      </Container>
      <Bar />
    </>
  );
}
