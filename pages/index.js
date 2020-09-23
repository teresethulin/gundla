import { getData, getInstagramPictures } from "../lib/api";
import InstagramGrid from "../components/index/InstagramGrid";
import CardWelcome from "../components/index/CardWelcome";
import CardFindUs from "../components/index/CardFindUs";

export default function Home({ pictures, post, hours }) {
  console.log(hours);
  return (
    <div>
      <CardWelcome post={post}></CardWelcome>
      <CardFindUs post={post}></CardFindUs>
      <InstagramGrid pictures={pictures}></InstagramGrid>
    </div>
  );
}

export async function getStaticProps() {
  const pictures = await getInstagramPictures("gundlagardscafe");
  const post = await getData("/start");

  return {
    props: { pictures, post },
  };
}
