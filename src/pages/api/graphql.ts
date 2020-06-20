import { ApolloServer, gql } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from '../../graphql/server/typeDefs';
import {
  Resolvers,
  MutationCreateTodoArgs,
  MutationUpdateTodoArgs,
} from '../../graphql/server/generated/graphql';

const resolvers: Resolvers = {
  Query: {
    todos: (root, args, { prisma }) => {
      return prisma.todo.findMany();
    },
  },
  Mutation: {
    createTodo: (root, args: MutationCreateTodoArgs, { prisma }) => {
      return prisma.todo.create({
        data: { ...args.input },
      });
    },
    updateTodo: (root, args: MutationUpdateTodoArgs, { prisma }) => {
      return prisma.todo.update({
        where: { id: parseInt(args.id) },
        data: { ...args.input },
      });
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
