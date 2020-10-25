import React from "react";
import Header from "../components/layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((reponse) =>
        this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        })
      );
  };
  addTodo = (title) => {
    const todoData = {
      title: title,
      completed: false,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todoData)
      .then((response) => {
        console.log(response.data);
        this.setState({
          todos: [...this.state.todos, response.data],
        });
      });
  };

  state = {
    todos: [],
  };

  componentDidMount() {
    const config = {
      params: {
        _limit: 15,
      },
    };
    // tạo GET request để lấy danh sách todo
    axios
      .get("https://jsonplaceholder.typicode.com/todos", config)
      .then((response) => this.setState({ todos: response.data }));
  }

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
