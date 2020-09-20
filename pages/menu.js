import Layout from "../components/layout";
import { getData } from "../lib/api";
import CardCafeMenu from "../components/cardcafemenu";

function Menu({ menuCategories }) {
  {
    console.log(menuCategories);
  }
  return (
    <Layout pageTitle="Meny">
      <h1>Caféutbud</h1>
      <CardCafeMenu menuCategories={menuCategories}></CardCafeMenu>
    </Layout>
  );
}

export async function getStaticProps() {
  const menuCategories = await getData("menu-categories");

  return {
    props: { menuCategories },
  };
}

export default Menu;
