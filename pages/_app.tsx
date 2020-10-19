import { Footer } from "components/Footer";
import "../styles/index.css";

import { Amplify } from "aws-amplify";
import awsExports from "src/aws-exports";

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
