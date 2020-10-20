/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  slug: string,
  tags: Array< string >,
  snippet: string,
  content: string,
  published: boolean,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  snippet?: ModelStringInput | null,
  content?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  slug?: string | null,
  tags?: Array< string > | null,
  snippet?: string | null,
  content?: string | null,
  published?: boolean | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  snippet?: ModelStringInput | null,
  content?: ModelStringInput | null,
  published?: ModelBooleanInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      slug: string,
      tags: Array< string >,
      snippet: string,
      content: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type PostsBySlugQueryVariables = {
  slug?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsBySlugQuery = {
  postsBySlug:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      slug: string,
      tags: Array< string >,
      snippet: string,
      content: string,
      published: boolean,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    slug: string,
    tags: Array< string >,
    snippet: string,
    content: string,
    published: boolean,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
