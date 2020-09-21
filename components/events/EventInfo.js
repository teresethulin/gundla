import { ContainerInfo, TitleInfo, Image } from "./style";
import ReactHtmlParser from "react-html-parser";

export default function EventInfo({ posts }) {
  posts.shift();
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

const imageFunc = (image) => {
  if (image === null) {
    return;
  }
  console.log(`${process.env.API_ENDPOINT}${image.url}`);
  return <Image src={`${process.env.API_ENDPOINT}${image.url}`}></Image>;
};
