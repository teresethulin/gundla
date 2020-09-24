import { getData, getInstagramPictures } from "../lib/api";
import { useEffect, useState } from "react";
import InstagramGrid from "../components/index/InstagramGrid";
import CardWelcome from "../components/index/CardWelcome";
import CardFindUs from "../components/index/CardFindUs";
import ImageLinks from "../components/ImageLinks";
import OpeningHours from "../components/index/OpeningHours";

export default function Home({ post, imageLinks, hours }) {
  // const [pictures, setPictures] = useState(null);
  // useEffect(async () => {
  //   setPictures(await getInstagramPictures("gundlagardscafe"));
  // });

  return (
    <div>
      {console.log(pictures)}
      <CardWelcome post={post}></CardWelcome>
      <ImageLinks imageLinks={imageLinks}></ImageLinks>
      <CardFindUs post={post}></CardFindUs>
      <OpeningHours hours={hours}></OpeningHours>
      {/* <InstagramGrid pictures={pictures}></InstagramGrid> */}
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
