import { gql } from 'apollo-server-micro';

export const todos = gql`
  query todos {
    todos {
      id
      title
      done
    }
  }

  input CreateTodoInput {
    title: String!
  }

  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      done
    }
  }
`;
