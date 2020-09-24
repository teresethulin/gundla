import { getData } from "../lib/api";
import styled from "styled-components";
import GreenPost from "../components/post/GreenPost";

const Container = styled.section`
  width: 100%;

  img {
    width: 100%;
    margin: 5vh 0;
  }
`;

function Menu({ post }) {
  return (
    <Container>
      <GreenPost post={post}></GreenPost>
      <img src={post.image.url} alt={post.image.alternativeText} />
    </Container>
  );
}

export async function getStaticProps() {
  const { post } = await getData("/menu");
  const info = await getData("/info");
  const { hours } = await getData("/opening-hours");

  return {
    props: { post, info, hours },
  };
}

export default Menu;
