import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import {
  useTodosQuery,
  useCreateTodoMutation,
} from '../graphql/client/generated/graphql';

const Index: NextPage = () => {
  const todoQuery = useTodosQuery();
  const [createTodoMutation] = useCreateTodoMutation();
  const [textValue, setTextValue] = useState('');

  if (todoQuery.loading) {
    return <div>Loading...</div>;
  }

  if (todoQuery.error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTextValue(e.target.value)}
        value={textValue}
      ></input>
      <button
        onClick={() => {
          createTodoMutation({
            variables: { input: { title: textValue } },
          });
          setTextValue('');
          todoQuery.refetch();
        }}
      >
        Add
      </button>
      <ul>
        {todoQuery.data.todos.map((todo) => (
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
    </>
  );
};

export default Index;
