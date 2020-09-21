import Layout from "../components/layout";
import { getData } from "../lib/api";

async function getInstagramPictures(profileName) {
  const baseUrl = "https://www.instagram.com";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;

  const response = await fetch(jsonDataUrl);
  const jsonData = await response.json();
  const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

  return pictures;

  // if (response.ok) {
  //   return pictures;
  // } else {
  //   throw new Error(pictures);
  // }
}

export default function Home({ info, pictures }) {
  console.log(pictures);

  return <h1>Välkommen</h1>;
}

export async function getStaticProps() {
  const info = await getData("/info");
  const pictures = await getInstagramPictures("gundlagardscafe");

  return {
    props: { info, pictures },
  };
}
