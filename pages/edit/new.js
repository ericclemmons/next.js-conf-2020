import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "src/aws-exports";
import EditPost from "./[slug]";

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ params, req, res }) {
  const SSR = withSSRContext({ req });

  try {
    await SSR.Auth.currentAuthenticatedUser();
  } catch (error) {
    res.statusCode = 302;
    res.setHeader("location", "/");
    res.end();
  }

  return {
    props: {
      post: {
        published: false,
      },
    },
  };
}

export default function NewPost({ post }) {
  return <EditPost post={post} />;
}
