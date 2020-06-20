import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    todos: [Todo!]!
    hello: String!
  }

  input CreateTodoInput {
    title: String!
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
  }

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
  }
`;
