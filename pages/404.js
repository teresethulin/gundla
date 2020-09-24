import { getData } from "../lib/api";

export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}

export async function getStaticProps() {
  const info = await getData("/info");
  const { hours } = await getData("/opening-hours");

  return {
    props: { info, hours },
  };
}
