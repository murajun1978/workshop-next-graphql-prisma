import { ApolloServer, gql } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from '../../graphql/server/typeDefs';
import { Resolvers } from '../../graphql/server/generated/graphql';

const resolvers: Resolvers = {
  Query: {
    todos: async (root, args, { prisma }) => {
      return await prisma.todo.findMany();
    },
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
  context: () => {
    return {
      prisma: new PrismaClient(),
    };
  },
});

export default server.createHandler({
  path: '/api/graphql',
});
