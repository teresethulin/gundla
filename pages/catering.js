import { getData } from "../lib/api";
import GreenPost from "../components/post/GreenPost";
import GreenPostCenter from "../components/post/GreenPostCenter";
import CateringMenu from "../components/catering/CateringMenu";
import ReactHtmlParser from "react-html-parser";

export default function Catering({ post, menu_suggestion, bottom, info }) {
  return (
    <div>
      <GreenPost post={post} email={info.email} />
      <CateringMenu menu={menu_suggestion} />
      <GreenPostCenter post={bottom} email={info.email}>
        {ReactHtmlParser(bottom)}
      </GreenPostCenter>
    </div>
  );
}

export async function getStaticProps() {
  const { post, menu_suggestion, bottom } = await getData("/catering");
  const info = await getData("/info");
  const { hours } = await getData("/opening-hours");

  return {
    props: { post, menu_suggestion, bottom, info, hours },
    revalidate: 30,
  };
}
