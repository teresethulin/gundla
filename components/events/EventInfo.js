import { ContainerInfo, TitleInfo, Image } from "./style";
import { imageFunc } from "../../functions/image";
import ReactHtmlParser from "react-html-parser";

export default function EventInfo({ posts }) {
  return (
    <ContainerInfo>
      {posts.map((post) => (
        <div key={post.id}>
          <TitleInfo>{post.title}</TitleInfo>
          {ReactHtmlParser(post.text)}
          {imageFunc(post.image)}
        </div>
      ))}
    </ContainerInfo>
  );
}
