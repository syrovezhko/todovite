import React from 'react';
import styles from './Main.modules.scss';
import Card from '../card/Card';
import { Async } from 'react-async';

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
const Main = () => {
  return (
    <Async promiseFn={fetchData}>
      {({ data, error, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (error) return `Something went wrong: ${error.message}`;
        if (data) {
          const todo = data;
          return (
            <main>
              {todo.map((i: IData) => (
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
};

export default Main;
