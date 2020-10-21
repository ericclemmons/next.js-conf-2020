import EditPost from "./[slug]";

export async function getServerSideProps({ params, req, res }) {
  try {
    console.error("TODO Check session for `Auth.currentAuthenticatedUser()`");
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
