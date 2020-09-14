import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "../components/footer";

const Layout = () => (
  <main>
    <Head>
      <title>Gundla gårdscafé</title>
    </Head>
    <Header></Header>
    <Footer></Footer>
  </main>
);

export default Layout;
