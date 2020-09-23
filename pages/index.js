import { getData, getInstagramPictures } from "../lib/api";
import Link from "next/link";
import InstagramGrid from "../components/index/InstagramGrid";
import CardWelcome from "../components/index/CardWelcome";
import CardFindUs from "../components/index/CardFindUs";
import ContainerImageLinks from "../components/index/ContainerImageLinks";
import CardImageLink from "../components/index/ImageLinks";
import OpeningHours from "../components/index/OpeningHours";

export default function Home({ pictures, post, imageLinks, hours }) {
  return (
    <div>
      <CardWelcome post={post}></CardWelcome>
      <CardImageLink imageLinks={imageLinks}></CardImageLink>
      <CardFindUs post={post}></CardFindUs>
      <OpeningHours hours={hours}></OpeningHours>
      <InstagramGrid pictures={pictures}></InstagramGrid>
    </div>
  );
}

export async function getStaticProps() {
  const pictures = await getInstagramPictures("gundlagardscafe");
  const post = await getData("/start");
  const imageLinks = await getData("/image-links");
  const hours = await getData("/opening-hours");

  return {
    props: { pictures, post, imageLinks, hours },
  };
}
