import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import Bar from "../Bar";

const StyledCard = styled.section`
  width: 100%;
  padding: 32px 22px;
  margin: 0;
  background-color: var(--main-bg-brown);
  color: var(--main-text-color);

  a {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 106%;
`;

const MarginContainer = styled.div`
  margin: 2vh 0 5vh;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25), 2px 2px 0px rgba(0, 0, 0, 0.16);
`;

const MapsIconFirst = styled.div`
  display: flex;
  margin-top: 10px;
  @media (min-width: 768px) {
  }
`;

export default function CardWelcome({ post }) {
  return (
    <MarginContainer>
      <Bar />
      <StyledCard>
        <Title>{post.post_two.title}</Title>
        {ReactHtmlParser(post.post_two.text)}
        <MapsIconFirst>
          <a href="https://www.google.com/maps/dir/Gundla+mosse+32,+G%C3%B6teborg//@57.6863905,12.0242382,16z/data=!4m8!4m7!1m5!1m1!1s0x464ff3e9fab7c319:0x881e787529cd7b7c!2m2!1d12.0286156!2d57.6863848!1m0">
            <p style={{ textDecoration: "underline", margin: 0 }}>
              Öppna karta{" "}
            </p>
          </a>
          <img
            style={{ marginLeft: 10, width: 18 }}
            src="/assets/Vector-1.png"
            alt="google maps icon"
          />
        </MapsIconFirst>
      </StyledCard>
      <Bar />
    </MarginContainer>
  );
}
