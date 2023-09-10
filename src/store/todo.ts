import { makeAutoObservable } from 'mobx';

type TTodo = {
  id: number;
  userId?: number;
  title: string;
  completed: boolean;
};

class Todo {
  todo: TTodo[] = [];
  completedTasks: number = 0

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(task: TTodo) {
    this.todo.unshift(task);
    this.completedTasks++;
  }

  removeTodo(id: number) {
    this.todo = this.todo.filter((task) => task.id !== id);
    this.completedTasks--;
  }

  completedTodoState(id: number) {
    this.todo.forEach((task) => task.id === id ? console.log(id) : task);
    this.countCompletedOnLoad()
  }

  fetchTodo(data: TTodo[]){
    console.log('fetchTodo')
    this.todo = data;
    this.countCompletedOnLoad()
  }

  countCompletedOnLoad(){
    console.log('countCompletedOnLoad')
    let counter = 0
    this.todo.forEach((task) => {
      if(!task.completed) {
        counter++
      }
    })
    this.completedTasks = counter;
  }
}

export default new Todo();
