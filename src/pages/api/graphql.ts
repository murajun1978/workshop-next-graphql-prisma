import { ApolloServer, gql } from 'apollo-server-micro';

// Todo schema

// todos
// id, title, done
// createTodo
// updateTodo

const typeDefs = gql`
  type Query {
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
  }
`;

const resolvers = {
  Query: {
    todos: () => [
      {
        id: 1,
        title: 'todo1',
        done: false,
      },
      {
        id: 2,
        title: 'todo2',
        done: true,
      },
    ],
  },
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
});

export default server.createHandler({
  path: '/api/graphql',
});
