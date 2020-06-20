import { ApolloServer, gql } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/server/typeDefs';

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
  mockEntireSchema: false,
});

export default server.createHandler({
  path: '/api/graphql',
});
