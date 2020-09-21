import { getInstagramPictures } from "../lib/api";
import InstagramGrid from "../components/InstagramGrid";

export default function Home({ pictures }) {
  return (
    <div>
      <h1>Välkommen</h1>
      <InstagramGrid pictures={pictures}></InstagramGrid>
    </div>
  );
}

export async function getStaticProps() {
  const pictures = await getInstagramPictures("gundlagardscafe");

  return {
    props: { pictures },
  };
}
