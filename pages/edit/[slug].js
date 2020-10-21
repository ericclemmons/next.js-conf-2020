import { Menu } from "@headlessui/react";
import { ContextMenu } from "components/ContextMenu";
import { Header } from "components/Header";
import { kebabCase } from "lodash";
import { useRef, useState } from "react";

export async function getServerSideProps({ params, req, res }) {
  const { slug } = params;

  try {
    console.warn("TODO Check session for `Auth.currentAuthenticatedUser()`");
  } catch (error) {
    res.statusCode = 302;
    res.setHeader("location", "/");
    res.end();
  }

  // TODO Fetch posts by `slug` and get first `post`
  const [post] = require("fixtures").posts.filter((post) => post.slug === slug);

  if (!post) {
    res.statusCode = 302;
    res.setHeader("location", "/edit/new");
    res.end();
  }

  return {
    props: { post },
  };
}

export default function EditPost({ post }) {
  const formRef = useRef(null);
  const [updatedPost, setUpdatedPost] = useState(null);

  function handleChange(event) {
    const formData = new FormData(formRef.current);

    // Convert string values into `Post` structure
    setUpdatedPost({
      published: Boolean(formData.get("published")),
      title: String(formData.get("title")).trim(),
      slug: kebabCase(String(formData.get("title"))),
      tags: String(formData.get("tags"))
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      snippet: String(formData.get("snippet")).trim(),
      content: String(formData.get("content")).trim(),
    });
  }

  function handleDelete() {
    if (confirm("Are you sure?")) {
      // TODO Delete post by `post.id`
      Promise.resolve()
        .then(() => {
          window.location.href = "/";
        })
        .catch(console.warn);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (post.id) {
      // TODO Mutate post with `updatedPost` as `input`
      Promise.resolve(require("fixtures").updatePost)
        .then((response) => {
          window.location.href = `/api/preview?slug=${response.data.updatePost.slug}`;
        })
        .catch(console.error);
    } else {
      // TODO Create post with `updatedPost` as `input`
      Promise.resolve(require("fixtures").createPost)
        .then((response) => {
          window.location.href = `/api/preview?slug=${response.data.createPost.slug}`;
        })
        .catch(console.error);
    }
  }

  return (
    <>
      <Header>
        <div className="text-center">
          <h2 className="mt-3 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 md:mt-5 sm:text-5xl sm:leading-none md:text-6xl">
            {post.title ? "Edit" : "New"} Post
          </h2>
        </div>
      </Header>

      <ContextMenu>
        {post.id && (
          <>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left`}
                  href={`/api/preview?slug=${post.slug}`}
                >
                  <svg
                    className="w-5 h-5 mr-2 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Preview Draft
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left`}
                  onClick={handleDelete}
                >
                  <svg
                    className="w-5 h-5 mr-2 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Delete {post.published ? "post" : "draft"}
                </button>
              )}
            </Menu.Item>
          </>
        )}
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
            <form onChange={handleChange} onSubmit={handleSubmit} ref={formRef}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                          defaultChecked={post ? post.published : false}
                          name="published"
                          id="published"
                          type="checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="published"
                          className="font-medium text-gray-700"
                        >
                          Published
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Title
                    </label>
                    <div className="rounded-md shadow-sm">
                      <input
                        className="flex-1 block w-full mt-1 transition duration-150 ease-in-out rounded-md form-input sm:text-sm sm:leading-5"
                        defaultValue={post.title}
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
                        value={updatedPost ? updatedPost.slug : post.slug ?? ""}
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
                        defaultValue={post.tags}
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
                        defaultValue={post.snippet}
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
                        defaultValue={post.content}
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
                      disabled={!updatedPost}
                      type="submit"
                      className={
                        updatedPost
                          ? "inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                          : "inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md opacity-50"
                      }
                    >
                      {updatedPost ? "Save" : "No changes"}
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
