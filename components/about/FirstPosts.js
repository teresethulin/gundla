import ReactHtmlParser from "react-html-parser";
import { imageFunc } from "../../functions/image";
import { Container, Title } from "./style";

export default function FirstPosts({ posts, map }) {
  return (
    <Container
      style={{ backgroundColor: "var(--main-bg-yellow)", color: "#35610c" }}
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
      <p>{map}</p>
    </Container>
  );
}
