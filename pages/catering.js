import { getData } from "../lib/api";
import GreenPost from "../components/post/GreenPost";
import CateringMenu from "../components/catering/CateringMenu";
import ReactHtmlParser from "react-html-parser";

export default function Catering({ post, menu_suggestion, bottom, email }) {
  return (
    <div>
      <GreenPost post={post} email={email} />
      <CateringMenu menu={menu_suggestion} />
      <GreenPost post={bottom} email={email}>
        {ReactHtmlParser(bottom)}
      </GreenPost>
    </div>
  );
}

export async function getStaticProps() {
  const { post, menu_suggestion, bottom } = await getData("/catering");
  const { email } = await getData("/info");
  return {
    props: { post, menu_suggestion, bottom, email },
    revalidate: 30,
  };
}
