import PostPage from "../posts/[slug]";

export default function DraftPage() {
  return (
    <>
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

      <PostPage />
    </>
  );
}
