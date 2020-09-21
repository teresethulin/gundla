import { getData } from "../lib/api";
import FirstPosts from "../components/about/FirstPosts";
import SecondPosts from "../components/about/SecondPosts";

export default function About({ post, info }) {
  return (
    <div>
      <FirstPosts posts={[post[0], post[1]]} map={info.address} />{" "}
      <SecondPosts posts={[post[2], post[3]]} info={info} />
    </div>
  );
}

export async function getStaticProps() {
  const { post } = await getData("/about");
  const { email, phone_number, address } = await getData("/info");
  return {
    props: { info: { email, phone_number, address }, post },
    revalidate: 30,
  };
}
