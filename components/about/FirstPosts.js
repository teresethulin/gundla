import ReactHtmlParser from "react-html-parser";
import { imageFunc } from "../../functions/image";
import { Container, Title } from "./style";

export default function FirstPosts({ posts }) {
  return (
    <Container
      style={{
        backgroundColor: "var(--main-bg-blue)",
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
      <div style={{ display: "flex", marginTop: 10 }}>
        <a href="https://www.google.com/maps/dir/Gundla+mosse+32,+G%C3%B6teborg//@57.6863905,12.0242382,16z/data=!4m8!4m7!1m5!1m1!1s0x464ff3e9fab7c319:0x881e787529cd7b7c!2m2!1d12.0286156!2d57.6863848!1m0">
          <p style={{ textDecoration: "underline", margin: 0 }}>
            Öppna google maps{" "}
          </p>
        </a>
        <img
          style={{ marginLeft: 10, width: 18 }}
          src="/assets/Vector-1.png"
          alt="google maps icon"
        />
      </div>
    </Container>
  );
}
