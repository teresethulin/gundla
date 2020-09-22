import ReactHtmlParser from "react-html-parser";
import { imageFunc } from "../../functions/image";
import {
  Container,
  Title,
  Bar,
  MarginCointainer,
  DesktopDiv,
  DesktopDivCenter,
} from "./style";
import InfoPosts from "./InfoPosts";

export default function SecondPosts({ posts, info }) {
  return (
    <MarginCointainer>
      <Bar />
      <Container
        style={{
          backgroundColor: "var(--main-bg-green)",
          color: "var(--main-text-color)",
        }}
      >
        <div>
          <DesktopDiv>
            <Title>{posts[0].title}</Title>
            {ReactHtmlParser(posts[0].text)}
          </DesktopDiv>
          {imageFunc(posts[0].image)}
        </div>
        <div>
          <DesktopDivCenter>
            <Title style={{ width: "100%" }}>{posts[1].title}</Title>
            {ReactHtmlParser(posts[1].text)}
          </DesktopDivCenter>
          {imageFunc(posts[1].image)}
        </div>

        <InfoPosts info={info} />
      </Container>
      <Bar />
    </MarginCointainer>
  );
}
