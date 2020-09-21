import "../styles/globals.css";
import Layout from "../components/layout";
import { getData } from "../lib/api";

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="cool">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

export async function getStaticProps() {
  const info = await getData("/info");

  return {
    props: { info },
  };
}
