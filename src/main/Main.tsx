import React, { useEffect } from 'react';
import './Main.modules.scss';
import Card from '../card/Card';
import { Async } from 'react-async';
import { observer } from 'mobx-react-lite';
import todo from '../store/todo';

const fetchData = () =>
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

export interface IData {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}
const Main = observer(() => {
  return (
    <Async promiseFn={fetchData}>
      {({ data, error, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (error) return `Something went wrong: ${error.message}`;
        if (data) {
          todo.fetchTodo(data);
          // const todo = data;
          return (
            <main className="main">
              {todo.todo.map((i: IData) => (
                <Card
                  userId={i.userId}
                  key={i.id}
                  id={i.id}
                  title={i.title}
                  completed={i.completed}
                />
              ))}
            </main>
          );
        }
      }}
    </Async>
  );
});

export default Main;
