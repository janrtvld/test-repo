import "../styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.svg" />
      </Head>
      <NextSeo
        title="Animo NFT | Powered By Animo"
        description="Mint your custom generated Animo NFT."
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
