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

  input UpdateTodoInput {
    done: Boolean!
  }

  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      done
    }
  }

  mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      title
      done
    }
  }
`;
