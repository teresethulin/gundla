import "../styles/globals.css";
import Layout from "../components/layout";
import { getData } from "../lib/api";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout info={pageProps.info} hours={pageProps.hours} pageTitle="">
      <Component {...pageProps} />
    </Layout>
  );
}
