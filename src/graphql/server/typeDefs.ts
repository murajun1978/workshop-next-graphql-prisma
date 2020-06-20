import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    todos: [Todo!]!
    hello: String!
  }

  input CreateTodoInput {
    title: String!
  }

  input UpdateTodoInput {
    done: Boolean!
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
  }

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
  }
`;
