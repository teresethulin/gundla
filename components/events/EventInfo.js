import { ContainerInfo, TitleInfo, Bar, DesktopImage } from "./style";
import { imageFunc } from "../../functions/image";
import ReactHtmlParser from "react-html-parser";

export default function EventInfo({ posts, image }) {
  return (
    <div style={{ marginTop: 20, marginBottom: 10 }}>
      <Bar />
      <DesktopImage src={image.url} />
      <ContainerInfo>
        {posts.map((post) => (
          <div key={post.id}>
            <TitleInfo>{post.title}</TitleInfo>
            {ReactHtmlParser(post.text)}
            {imageFunc(post.image)}
          </div>
        ))}
      </ContainerInfo>
      <Bar />
    </div>
  );
}
