import Layout from "../components/layout";
import { getData } from "../lib/api";

export default function Home({ info }) {
  return <Layout info={info}></Layout>;
}

export async function getStaticProps() {
  const info = await getData("info");

  return {
    props: { info },
  };
}
