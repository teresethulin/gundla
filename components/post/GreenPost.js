import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { isTitle } from "../../functions/isTitle";
import { isEmail } from "../../functions/isEmail";

const Container = styled.div`
  width: 100%;
  padding: 32px 22px;
  margin: 0px;
  background-color: var(--main-bg-green);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  color: var(--main-text-black);
`;

const DesktopDiv = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 30% 70%;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 16px;
  background-color: var(--main-bg-black);
`;

export default function GreenPost({ post, children, email }) {
  return (
    <>
      <Bar />
      <Container>
        <DesktopDiv>
          {isTitle(post.title)}
          <div>{ReactHtmlParser(post.text)}</div>
        </DesktopDiv>
        {children}
        {isEmail(email)}
      </Container>
      <Bar />
    </>
  );
}
