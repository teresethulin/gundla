import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const StyledCard = styled.section`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  background-color: #4e746c;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
  color: var(--main-bg-yellow);
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 106%;
`;

const Image = styled.img`
  width: 100%;
  margin: 5vh 0 2vh;
`;

export default function CardWelcome({ post }) {
  return (
    <StyledCard>
      <Title>{post.post_one.title}</Title>
      {ReactHtmlParser(post.post_one.text)}
      <Image src={post.image.url} alt={post.image.alternativeText} />
      {ReactHtmlParser(post.description)}
    </StyledCard>
  );
}
