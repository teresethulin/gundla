import ReactHtmlParser from "react-html-parser";
import { imageFunc } from "../../functions/image";
import { Container, Title } from "./style";
import InfoPosts from "./InfoPosts";

export default function SecondPosts({ posts, info }) {
  return (
    <Container
      style={{
        backgroundColor: "var(--main-bg-green)",
        color: "var(--main-text-color)",
      }}
    >
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Title>{post.title}</Title>
            {ReactHtmlParser(post.text)}
            {imageFunc(post.image)}
          </div>
        );
      })}
      <InfoPosts info={info} />
    </Container>
  );
}
