import BluePost from "../components/post/BluePost";
import { getData } from "../lib/api";
import ImgGrid from "../components/ImgGrid";

export default function Renting({ post, image, email }) {
  return (
    <div>
      <BluePost post={post} mail={email} />
      <ImgGrid image={image} />
    </div>
  );
}

export async function getStaticProps() {
  const { post, image } = await getData("/party");
  const { email } = await getData("/info");

  return {
    props: { post, image, email },
  };
}
