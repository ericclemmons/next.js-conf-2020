/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      slug
      tags
      snippet
      content
      published
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        slug
        tags
        snippet
        content
        published
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const postsBySlug = /* GraphQL */ `
  query PostsBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        slug
        tags
        snippet
        content
        published
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
