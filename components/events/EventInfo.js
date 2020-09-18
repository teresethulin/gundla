import styled from "styled-components";

import { ContainerInfo, TitleInfo, DescInfo } from "./style";

export default function EventInfo({ posts }) {
  return (
    <ContainerInfo>
      {posts.map((post) => (
        <div key={post.id}>
          <TitleInfo>{post.title}</TitleInfo>
          <DescInfo>{post.description}</DescInfo>
        </div>
      ))}
    </ContainerInfo>
  );
}
