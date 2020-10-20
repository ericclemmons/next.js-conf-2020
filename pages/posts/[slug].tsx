import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Menu } from "@headlessui/react";
import { API } from "aws-amplify";
import { ContextMenu } from "components/ContextMenu";
import { Post } from "components/Post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PostsBySlugQuery, PostsBySlugQueryVariables } from "src/API";
import { postsBySlug } from "src/graphql/queries";

const placeholderPost = {
  id: "abc1",
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.\n\n`.repeat(
    50
  ),
  createdAt: "2020-03-11T00:00:00.000Z",
  published: true,
  slug: "boost-your-conversion-rate",
  snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.`,
  tags: ["blog"],
  title: "Boost your conversion rate",
  updatedAt: "2020-03-11T00:00:00.000Z",
};

export default function PostPage() {
  const router = useRouter();
  const [post, setPost] = useState(placeholderPost);

  useEffect(() => {
    const query = postsBySlug;
    const variables: PostsBySlugQueryVariables = {
      slug: router.query.slug,
    };
    const promise = API.graphql({ query, variables }) as Promise<
      GraphQLResult<PostsBySlugQuery>
    >;

    promise.then((response) => {
      const [post] = response.data.postsBySlug.items;
      setPost(post);
    });
  }, []);

  function publishDraft() {
    alert("TODO");
  }

  function convertToDraft() {
    alert("TODO");
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
              <button
                className={`${
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                onClick={post.published ? convertToDraft : publishDraft}
              >
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
