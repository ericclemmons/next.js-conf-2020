export function PostCard({ post }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
      key={post.id}
    >
      <div className="relative flex-shrink-0">
        {!post.published && (
          <p className="absolute right-0 inline-flex items-center justify-center px-4 py-1 leading-7 text-gray-600 bg-yellow-100 rounded-bl-lg shadow-md">
            <svg
              className="w-3 h-3 mr-1"
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
            Draft
          </p>
        )}

        <img
          className="object-cover w-full h-48 bg-gray-100 shadow-inner"
          src={`https://source.unsplash.com/featured/480x320/?tech,${post.tags}`}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <p className="text-sm font-medium leading-5 text-indigo-600">
            <a href="#" className="capitalize hover:underline">
              {post.tags.join(", ")}
            </a>
          </p>
          <a
            href={
              post.published
                ? `/posts/${post.slug}`
                : `/api/preview?slug=${post.slug}`
            }
            className="block"
          >
            <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
              {post.title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {post.snippet}
            </p>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex text-sm leading-5 text-gray-500">
            <time dateTime={post.createdAt}>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span className="mx-1">&middot;</span>
            <span>
              {Math.ceil(post.content.split(" ").length / 200)} min read
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
