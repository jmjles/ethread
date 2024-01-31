import { gql } from "@apollo/client";

export const getThreadsQuery = gql`
query GetThreads($popularity: String!, $time: String!) {
    getThreads(popularity: $popularity, time: $time) {
      title,
      content,
      user,
      parent,
      upVotes,
      downVotes
      categories
      community
      date
      deleted
      edited
      media
      replyTo
      shares
      views
    }
  }
`;
