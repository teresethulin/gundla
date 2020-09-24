import { getData, getInstagramPictures } from "../lib/api";
import InstagramGrid from "../components/index/InstagramGrid";
import CardWelcome from "../components/index/CardWelcome";
import CardFindUs from "../components/index/CardFindUs";
import ImageLinks from "../components/ImageLinks";
import OpeningHours from "../components/index/OpeningHours";

export default function Home({ pictures, post, imageLinks, hours }) {
  return (
    <div>
      <CardWelcome post={post}></CardWelcome>
      <ImageLinks imageLinks={imageLinks}></ImageLinks>
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
  const { hours } = await getData("/opening-hours");
  const info = await getData("/info");

  return {
    props: { pictures, post, imageLinks, hours, info },
  };
}
