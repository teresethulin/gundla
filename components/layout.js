import React from "react";
import Head from "next/head";
import Header from "./header";
import Footer from "../components/footer";

const Layout = ({ info }) => (
  <main>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
        rel="stylesheet"
      ></link>
      <title>Gundla gårdscafé</title>
    </Head>
    <Header></Header>
    <Footer info={info}></Footer>
  </main>
);

export default Layout;
