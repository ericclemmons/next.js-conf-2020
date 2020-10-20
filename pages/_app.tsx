import { Amplify } from "aws-amplify";
import { Footer } from "components/Footer";
import awsExports from "src/aws-exports";
import "../styles/index.css";

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
