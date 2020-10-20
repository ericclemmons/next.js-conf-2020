import Head from "next/head";
import { Footer } from "components/Footer";
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
