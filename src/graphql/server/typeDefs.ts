import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    todos: [Todo!]!
    hello: String!
  }

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
  }
`;
