import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import Bar from "../Bar";

const StyledCard = styled.section`
  width: 100%;
  padding: 32px 22px;
  margin: 0;
  background-color: var(--main-bg-blue);
  color: var(--main-text-color);
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 106%;
`;

const MarginContainer = styled.div`
  margin: 12px 0px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

export default function CardWelcome({ post }) {
  return (
    <MarginContainer>
      <Bar />
      <StyledCard>
        <Title>{post.post_one.title}</Title>
        {ReactHtmlParser(post.post_one.text)}
        {ReactHtmlParser(post.description)}
      </StyledCard>
      <Bar />
    </MarginContainer>
  );
}
