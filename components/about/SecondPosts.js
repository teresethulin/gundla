import ReactHtmlParser from "react-html-parser";
import { imageFunc } from "../../functions/image";
import { Container, Title } from "./style";

export default function SecondPosts({ posts, info }) {
  return (
    <Container
      style={{ backgroundColor: "var(--main-bg-green)", color: "#fffcf1" }}
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
      <a href={`tel:${info.phone_number}`}>
        <p style={{ textDecoration: "underline" }}>{info.phone_number}</p>
      </a>
      <p style={{ textDecoration: "underline" }}>{info.email}</p>
      <p>{info.address}</p>
    </Container>
  );
}
