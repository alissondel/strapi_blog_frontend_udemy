import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}
  query GET_POSTS(
    # $categorySlug: String
    # $postSlug: String
    # $postSearch: String
    # $authorSlug: String
    # $tagSlug: String
    $sort: [String] = "createdAt:desc"
    $start: Int = 0
    $limit: Int = 10
  ) {
    setting {
      data {
        attributes {
          ...settings
        }
      }   
    }
    posts(
      sort: $sort
      pagination: {
        start: $start
        limit: $limit
      }
      # where: {
      #   slug: $postSlug
      #   title_contains: $postSearch
      #   categories: { slug: $categorySlug }
      #   author: { slug: $authorSlug }
      #   tags: { slug: $tagSlug }
      # }
    ) {
      data {
        attributes {
          ...post
        }
      }
    }
  }
`;