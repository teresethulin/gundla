import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { getInfo } from "../lib/api";

export default function Home({ info }) {
  return <Layout info={info}></Layout>;
}

export async function getStaticProps() {
  const info = await getInfo();

  return {
    props: { info },
  };
}
