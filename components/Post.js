import { Header } from "components/Header";
import ReactMarkdown from "react-markdown";

export function Post({ post }) {
  return (
    <>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full mx-auto text-lg max-w-prose">
          <svg
            className="absolute transform translate-x-32 top-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute transform translate-x-32 bottom-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>

      <div className="-mt-16">
        <Header>
          <div className="text-center">
            {post.tags.map((tag) => (
              <h1
                className="text-base font-semibold leading-6 tracking-wide text-indigo-600 uppercase"
                key={tag}
              >
                {tag}
              </h1>
            ))}
            <p className="mt-1 text-4xl font-extrabold leading-10 text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              {post.title}
            </p>
            <p className="max-w-xl mx-auto mt-5 text-xl leading-7 text-gray-500">
              {post.snippet}
            </p>
          </div>
        </Header>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto prose prose-lg text-gray-500">
          <figure>
            <img
              className="w-full bg-gray-100 rounded-lg shadow-inner"
              src={`https://source.unsplash.com/featured/1080x720/?tech,${post.tags}`}
              alt=""
              width="1310"
              height="873"
            />
          </figure>

          <ReactMarkdown escapeHtml={false}>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
