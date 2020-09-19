import Layout from "../components/layout";
import { getData } from "../lib/api";

export default function Home({ info }) {
  return (
    <Layout pageTitle="">
      <h1>Välkommen</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const info = await getData("info");

  return {
    props: { info },
  };
}
