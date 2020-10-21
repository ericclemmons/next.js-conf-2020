exports.posts = [
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
    title: "Placeholder for Boost your conversion rate",
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
    title:
      "Placeholder for How to use search engine optimization to drive sales",
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
    title: "Placeholder for Improve your customer experience",
    updatedAt: "2020-10-24T22:56:05.236Z",
  },
];

exports.createPost = {
  data: {
    createPost: exports.posts[0],
  },
};

exports.updatePost = {
  data: {
    updatePost: exports.posts[0],
  },
};

exports.user = {
  username: "ericclemmons",
  attributes: {
    email: "eric@smarterspam.com",
  },
};
