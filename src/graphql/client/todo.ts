import { gql } from 'apollo-server-micro';

export const todos = gql`
  query todos {
    todos {
      id
      title
      done
    }
  }
`;
