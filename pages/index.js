import { ContextMenu } from "components/ContextMenu";
import { Hero } from "components/Hero";
import { PostCard } from "components/PostCard";

export async function getStaticProps({ preview, req }) {
  // TODO List posts with `filter` where `published` equals `true`
  return {
    props: {
      posts: require("fixtures").posts.filter(
        (post) => preview || post.published
      ),
    },
  };
}

export default function IndexPage({ posts = [] }) {
  return (
    <>
      <ContextMenu />

      <Hero>
        <img
          className="inline-block w-24 h-24 md:h-36 md:w-36"
          src="https://raw.githubusercontent.com/aws-amplify/aws-amplify.github.io/master/images/Logos/Amplify%20Logo.svg"
          alt=""
        />

        <h2 className="mt-3 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 md:mt-5 sm:text-5xl sm:leading-none md:text-6xl">
          Welcome to my <br className="xl:hidden" />
          <span className="text-indigo-600">Next.js + Amplify Blog</span>
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Powered by <mark>Amazon Cognito</mark> for Authentication and{" "}
          <mark>AWS AppSync</mark> for data.
        </p>
        <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="https://docs.amplify.aws/"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
            >
              Documentation
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a
              href="https://github.com/ericclemmons/next.js-conf-2020"
              className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
            >
              <svg
                className="w-6 h-6 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              GitHub
            </a>
          </div>
        </div>
      </Hero>

      <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              From the blog
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              Trying to share what I've learned, as time allows.
            </p>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-3 md:max-w-none">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
