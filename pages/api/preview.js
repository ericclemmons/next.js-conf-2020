export default async function preview(req, res) {
  try {
    throw new Error("TODO Check session for `Auth.currentAuthenticatedUser()`");
  } catch (error) {
    return res.status(401).json(error);
  }

  res.setPreviewData({});

  const { slug } = req.query;

  if (!slug) {
    return res.end("Preview mode enabled");
  }

  // TODO Fetch posts by `slug` and get first `post`
  const [post] = [];

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.redirect(`/posts/${post.slug}`);
}
