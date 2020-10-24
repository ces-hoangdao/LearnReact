import React from "react";
import Header from '../components/layout/Header';
import Todos from './Todos';

class TodoApp extends React.Component{
    state = { 
        todos: [
            {
                id: 1, 
                title: "Work home",
                completed : true 
            },
            {
                id: 2, 
                title: "GO  home",
                completed : true 
            },
            {
                id: 3, 
                title: "Do morning EX",
                completed : false
            },
        ]
    };
    render(){
        return (
            <div className = "container">
                <Header></Header>
                <Todos todos={this.state.todos} ></Todos>,
            </div>
        );
    }
}
export default TodoApp;