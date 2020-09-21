import styled from "styled-components";
const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 102%;
`;

export const isTitle = (title) => {
  if (title !== null || title !== undefined) {
    return <Title>{title}</Title>;
  }
  return;
};
