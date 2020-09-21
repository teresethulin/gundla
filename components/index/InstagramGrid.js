import styled from "styled-components";

const InstaCard = styled.section`
  width: 100%;
  padding: 32px 22px;
  margin: 12px 0px;
  background-color: #fffcf1;
  color: #35610c;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);

  a {
    text-decoration: underline;
    font-family: "Harmattan";
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 102%;
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

const WrapperAlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function InstagramGrid({ pictures }) {
  return (
    <InstaCard>
      <Title>
        Följ oss på{" "}
        <a href="https://www.instagram.com/gundlagardscafe/">Instagram</a>
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
      <WrapperAlignRight>
        <Title>
          @
          <a href="https://www.instagram.com/gundlagardscafe/">
            gundlagardscafe
          </a>
        </Title>
      </WrapperAlignRight>
    </InstaCard>
  );
}
