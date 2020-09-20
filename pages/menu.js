import Layout from "../components/layout";
import { getData } from "../lib/api";
import CardCafeMenu from "../components/cardcafemenu";
import BeigePost from "../components/post/BeigePost";

function Menu({ menuCategories, post }) {
  {
    console.log(post);
  }
  return (
    <Layout pageTitle="Meny">
      <BeigePost post={post}></BeigePost>
      <CardCafeMenu menuCategories={menuCategories}></CardCafeMenu>
    </Layout>
  );
}

export async function getStaticProps() {
  const menuCategories = await getData("menu-categories");
  const { post } = await getData("menu");

  return {
    props: { menuCategories, post },
  };
}

export default Menu;
