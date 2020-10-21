import { ContextMenu } from "components/ContextMenu";
import { Hero } from "components/Hero";
import { PostCard } from "components/PostCard";

const placeholderPosts = [
  {
    id: "abc1",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.`.repeat(
      50
    ),
    createdAt: "2020-03-11T00:00:00.000Z",
    published: false,
    slug: "boost-your-conversion-rate",
    snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.`,
    tags: ["blog"],
    title: "Boost your conversion rate",
    updatedAt: "2020-03-11T00:00:00.000Z",
  },
  {
    id: "abc2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.`.repeat(
      50
    ),
    createdAt: "2020-05-19T22:56:05.236Z",
    slug: "how-to-use-search-engine-optimization-to-drive-sales",
    snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.`,
    published: true,
    tags: ["video"],
    title: "How to use search engine optimization to drive sales",
    updatedAt: "2020-05-19T22:56:05.236Z",
  },
  {
    id: "abc3",
    createdAt: "2020-10-24T22:56:05.236Z",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.`.repeat(
      50
    ),
    published: true,
    slug: "improve-your-customer-experience",
    snippet: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.`,
    tags: ["case study"],
    title: "Improve your customer experience",
    updatedAt: "2020-10-24T22:56:05.236Z",
  },
];

export default function IndexPage({ posts = placeholderPosts }) {
  return (
    <>
      <ContextMenu />

      <Hero />

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
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
