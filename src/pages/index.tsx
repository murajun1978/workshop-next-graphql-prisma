import { NextPage } from 'next';
import { Fragment } from 'react';
import { useTodosQuery } from '../graphql/client/generated/graphql';

const Index: NextPage = () => {
  const { data, loading, error } = useTodosQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <ul>
      {data.todos.map((todo) => (
        <Fragment key={todo.id}>
          <li>{todo.title}</li>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => {}}
          ></input>
        </Fragment>
      ))}
    </ul>
  );
};

export default Index;
