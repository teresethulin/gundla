import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 193px;
  background-color: var(--main-bg-black);
  margin: 3vh 0;

  a {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    max-width: 48%;
  }
`;

const Title = styled.h1`
  font-family: 20px;
  text-align: right;
  color: var(--main-text-white);
  margin: 2vh 25px 0 0;
`;

const Image = styled.img`
  width: 100%;
  height: 132px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  .arrow {
    margin: 0 25px 2vh 0;
    width: 113px;
  }
`;

export default function CardImageLink({ imageLinks }) {
  return (
    <StyledContainer>
      {imageLinks.images.map((image) => (
        <StyledCard key={image.id}>
          <Link
            href={`/${image.alternativeText}`}
            as={`/${image.alternativeText}`}
          >
            <a>
              <Image src={image.url} alt={image.alternativeText}></Image>
              <Title>{image.caption}</Title>
              <Wrapper>
                <img
                  className="arrow"
                  src="/assets/vector-arrow.png"
                  alt="arrow"
                />
              </Wrapper>
            </a>
          </Link>
        </StyledCard>
      ))}
    </StyledContainer>
  );
}
