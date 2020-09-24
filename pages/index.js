import { getData } from "../lib/api";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CardWelcome from "../components/index/CardWelcome";
import CardFindUs from "../components/index/CardFindUs";
import ImageLinks from "../components/ImageLinks";
import OpeningHours from "../components/index/OpeningHours";

const CardInstagram = styled.section`
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

const Grid = styled.div`
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

export default function Home({ post, imageLinks, hours }) {
  const [instagram, setInstagram] = useState("");
  useEffect(() => {
    fetch("https://www.instagram.com/gundlagardscafe/?__a=1")
      .then((resp) => resp.json())
      .then((json) => setInstagram(json));
  }, [0]);

  let pictures = [];

  if (instagram) {
    pictures = instagram.graphql.user.edge_owner_to_timeline_media.edges;
  }

  const top8 = pictures.slice(0, 8);

  return (
    <div>
      <CardWelcome post={post}></CardWelcome>
      <ImageLinks imageLinks={imageLinks}></ImageLinks>
      <CardFindUs post={post}></CardFindUs>
      <OpeningHours hours={hours}></OpeningHours>
      <CardInstagram>
        <Title>
          Följ oss på Instagram @
          <a href="https://www.instagram.com/gundlagardscafe/">
            gundlagardscafe
          </a>
        </Title>
        <a href="https://www.instagram.com/gundlagardscafe/">
          <Grid>
            {top8.map((picture) => (
              <img
                lazyloading="true"
                src={picture.node.thumbnail_resources[4].src}
                alt={picture.node.accessibility_caption}
                key={picture.node.id}
              />
            ))}
          </Grid>
        </a>
      </CardInstagram>
    </div>
  );
}

export async function getStaticProps() {
  const post = await getData("/start");
  const imageLinks = await getData("/image-links");
  const { hours } = await getData("/opening-hours");
  const info = await getData("/info");

  return {
    props: { post, imageLinks, hours, info },
  };
}
