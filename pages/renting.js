import BluePost from "../components/post/BluePost";
import { getData } from "../lib/api";
import ImgGrid from "../components/ImgGrid";

export default function Renting({ post, image, info, hours }) {
  return (
    <div>
      <BluePost post={post} mail={info.email} />
      <ImgGrid image={image} />
    </div>
  );
}

export async function getStaticProps() {
  const { post, image } = await getData("/party");
  const info = await getData("/info");
  const { hours } = await getData("/opening-hours");

  return {
    props: { post, image, info, hours },
  };
}
