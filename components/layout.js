import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";

const StyledContainer = styled.section`
  margin-top: 190px;
  width: 100%;
  height: auto;
  padding: 0 5vw;
  @media (min-width: 768px) {
    padding: 0 20vw;
  }
`;

const Layout = ({ children, pageTitle = "" }) => (
  <main>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow&family=Harmattan:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <title>Gundla gårdscafé || {pageTitle}</title>
    </Head>
    <Header></Header>
    <StyledContainer>{children}</StyledContainer>
    <Footer></Footer>
  </main>
);

export default Layout;
