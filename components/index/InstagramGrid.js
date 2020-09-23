import styled from "styled-components";

const InstaCard = styled.section`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  color: var(--main-text-color);
  font-weight: 600;
  letter-spacing: 0.01em;

  a {
    text-decoration: underline;
    font-family: "Harmattan";
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 102%;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const StyledInstagramGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  img {
    max-width: 48%;
    margin-bottom: 3%;
  }

  @media (min-width: 768px) {
    img {
      width: 48%;
    }
  }
`;

export default function InstagramGrid({ pictures }) {
  return (
    <InstaCard>
      <Title>
        Följ oss på Instagram @
        <a href="https://www.instagram.com/gundlagardscafe/">gundlagardscafe</a>
      </Title>
      <a href="https://www.instagram.com/gundlagardscafe/">
        <StyledInstagramGrid>
          {pictures.map((picture) => (
            <img
              lazyloading="true"
              src={picture.node.thumbnail_resources[4].src}
              alt={picture.node.accessibility_caption}
              key={picture.node.id}
            />
          ))}
        </StyledInstagramGrid>
      </a>
    </InstaCard>
  );
}
