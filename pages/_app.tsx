import React from "react";
import "../style/style.css";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rybí zahrada</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
