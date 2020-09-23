import "../styles/globals.css";
import Layout from "../components/layout";
import { getData } from "../lib/api";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

export async function getStaticProps() {
  const info = await getData("/info");
  const hours = await getData("/opening-hours");

  return {
    props: { info, hours },
  };
}
