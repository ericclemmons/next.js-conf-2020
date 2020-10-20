import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { Menu } from "@headlessui/react";
import { API } from "aws-amplify";
import { ContextMenu } from "components/ContextMenu";
import { Header } from "components/Header";
import { kebabCase } from "lodash";
import { useRef, useState } from "react";
import { CreatePostMutation } from "src/API";
import { createPost } from "src/graphql/mutations";

export default function DraftPage({ post = {} }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [updatedPost, setUpdatedPost] = useState(post);

  function updatePost(event) {
    const formData = new FormData(formRef.current);
    const {
      title = "",
      tags = "",
      snippet = "",
      content = "",
    } = Object.fromEntries(formData);

    setUpdatedPost({
      title: String(title).trim(),
      slug: kebabCase(title),
      tags: String(tags)
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      snippet: String(snippet).trim(),
      content: String(content).trim(),
    });
  }

  function savePost(event) {
    event.preventDefault();

    const promise = API.graphql({
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      query: createPost,
      variables: {
        input: {
          published: false,
          ...post,
          ...updatedPost,
        },
      },
    }) as Promise<GraphQLResult<CreatePostMutation>>;

    promise
      .then((response) => {
        window.location.href = `/posts/${response.data.createPost.slug}`;
      })
      .catch(console.error);
  }

  return (
    <>
      <Header>
        <div className="text-center">
          <h2 className="mt-3 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 md:mt-5 sm:text-5xl sm:leading-none md:text-6xl">
            New Draft
          </h2>
        </div>
      </Header>

      <ContextMenu>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-gray-100 text-gray-900" : "text-gray-700"
              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
            >
              Preview Draft
            </button>
          )}
        </Menu.Item>
      </ContextMenu>

      <div className="py-16 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <p className="mt-1 text-sm leading-5 text-gray-600">
                The header image will automatically be chosen for you from{" "}
                <a className="text-indigo-500" href="https://unsplash.com/">
                  unsplash
                </a>{" "}
                based on your <code>tags</code>.
              </p>
            </div>
            <div className="px-4 mt-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                JSON
              </h3>
              <p className="mt-1 text-sm leading-5 text-gray-600">
                Preview of what JSON will be sent to the API:
              </p>

              <div className="rounded-md shadow-sm">
                <textarea
                  className="block w-full mt-1 font-mono transition duration-150 ease-in-out opacity-75 form-textarea sm:text-sm sm:leading-5"
                  disabled={true}
                  id="content"
                  placeholder="Main post content goes here."
                  readOnly={true}
                  rows={10}
                  value={JSON.stringify(updatedPost, null, 2)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onChange={updatePost} onSubmit={savePost} ref={formRef}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Title
                    </label>
                    <div className="rounded-md shadow-sm">
                      <input
                        className="flex-1 block w-full mt-1 transition duration-150 ease-in-out rounded-md form-input sm:text-sm sm:leading-5"
                        defaultValue=""
                        name="title"
                        id="title"
                        placeholder="My New Post"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="slug"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Slug
                    </label>
                    <div className="rounded-md shadow-sm">
                      <input
                        className="flex-1 block w-full mt-1 transition duration-150 ease-in-out bg-gray-100 rounded-md opacity-50 cursor-not-allowed form-input sm:text-sm sm:leading-5"
                        disabled={true}
                        name="slug"
                        id="slug"
                        readOnly={true}
                        value={updatedPost.slug ?? ""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Slug is automatically created from the Title.
                    </p>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="tags"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Tags
                    </label>
                    <div className="rounded-md shadow-sm">
                      <input
                        className="flex-1 block w-full mt-1 transition duration-150 ease-in-out rounded-md form-input sm:text-sm sm:leading-5"
                        defaultValue=""
                        name="tags"
                        id="tags"
                        placeholder="tech,blog,amplify"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Comma-delimited list of categories describing this post.
                    </p>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="snippet"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Snippet
                    </label>
                    <div className="rounded-md shadow-sm">
                      <input
                        className="flex-1 block w-full mt-1 transition duration-150 ease-in-out rounded-md form-input sm:text-sm sm:leading-5"
                        defaultValue=""
                        id="snippet"
                        name="snippet"
                        placeholder="Don't bury the lede!"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      One or two sentence introduction. This is used for
                      previews.
                    </p>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Content
                    </label>
                    <div className="rounded-md shadow-sm">
                      <textarea
                        className="block w-full mt-1 font-mono transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5"
                        defaultValue=""
                        id="content"
                        name="content"
                        placeholder="Main post content goes here."
                        rows={10}
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      GitHub Flavored Markdown supported.
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <span className="inline-flex rounded-md shadow-sm">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                    >
                      Save
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
