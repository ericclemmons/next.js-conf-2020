import { Footer } from "components/Footer";
import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js + Ampify Blog</title>
      </Head>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
