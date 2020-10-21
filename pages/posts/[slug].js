import { Menu } from "@headlessui/react";
import { ContextMenu } from "components/ContextMenu";
import { Hero } from "components/Hero";
import { Post } from "components/Post";
import Error from "next/error";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  // TODO List posts with `filter` where `published` equals `true`
  const posts = [];

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { slug } = params;

  // TODO Fetch posts by `slug` and get first `post`.
  // (Filter by `published` if not `preview`)
  const posts = require("fixtures").posts.filter((post) => post.slug === slug);
  const [post = null] = posts;

  return {
    props: { post },
  };
}

export default function PostPage({ post }) {
  const router = useRouter();

  function publishDraft() {
    // TODO Update post with `published: true` where `id` matches `post.id`
    // (Needs "AMAZON_COGNITO_USER_POOLS")
    Promise.resolve(require("fixtures").updatePost)
      .then((response) => {
        window.location.href = `/posts/${response.data.updatePost.slug}`;
      })
      .catch(console.warn);
  }

  function convertToDraft() {
    // TODO Update post with `published: false` where `id` matches `post.id`
    // (Needs "AMAZON_COGNITO_USER_POOLS")
    Promise.resolve(require("fixtures").updatePost)
      .then((response) => {
        window.location.href = `/edit/${response.data.updatePost.slug}`;
      })
      .catch(console.warn);
  }

  if (router.isFallback) {
    return (
      <Hero>
        <h2 className="mt-3 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 animate-pulse md:mt-5 sm:text-5xl sm:leading-none md:text-6xl">
          &hellip;
        </h2>
      </Hero>
    );
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {!post.published && (
        <div className="bg-yellow-100 shadow-inner">
          <div className="max-w-screen-xl px-3 py-3 mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center flex-1 w-0">
                <span className="flex p-2 bg-yellow-300 rounded-lg">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="ml-3 font-medium text-gray-700 truncate">
                  <span className="inline">This is a draft post.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative py-16 overflow-hidden bg-white">
        <ContextMenu>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left`}
                href={`/edit/${post.slug}`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Edit {post.published ? "post" : "draft"}
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left`}
                onClick={post.published ? convertToDraft : publishDraft}
              >
                {post.published ? (
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}

                {post.published ? "Convert to draft" : "Publish draft"}
              </button>
            )}
          </Menu.Item>
        </ContextMenu>

        <Post post={post} />
      </div>
    </>
  );
}
