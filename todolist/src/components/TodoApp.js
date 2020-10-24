import React from "react";
import Header from "../components/layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import uuid from "uuid";

class TodoApp extends React.Component {
  handleCheckboxchange = (id) => {
    this.setState({
      todo: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: [
        /* ... toan tu spread operator : lay todo hien tai */
        ...this.state.todos.filter((todo) => {
          /* ham filter() tra ve 1 mang cac phan tu thoa man dk nao do */
          return todo.id !== id;
        }),
      ],
    });
  };
  addTodo = (title) => {
    const newTodo = { 
        id: uuid.v4(), 
        title: title, 
        completed: false };
    this.setState({ todos:
        [...this.state.todos, newTodo] });
  };
  state = {
    todos: [
      {
        id: 1,
        title: "Work home",
        completed: true,
      },
      {
        id: 2,
        title: "GO  home",
        completed: true,
      },
      {
        id: 3,
        title: "Do morning EX",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <Header></Header>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todos
          todos={this.state.todos}
          handleChange={this.handleCheckboxchange}
          deleteTodo={this.deleteTodo}
        ></Todos>
        
      </div>
    );
  }
}
export default TodoApp;
