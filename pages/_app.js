import "../styles/globals.css";
import Layout from "../components/layout";
import { getData } from "../lib/api";

function MyApp({ Component, pageProps, info }) {
  console.log(info);
  return (
    <Layout info={info} pageTitle="cool">
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
