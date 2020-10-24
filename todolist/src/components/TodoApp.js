import React from "react";
import Header from '../components/layout/Header';
import Todos from './Todos';

class TodoApp extends React.Component{
    handleCheckboxchange = id => {
        console.log("checked on check box id =" + id);
        this.setState({ 
            todo: this.state.todos.map(todo =>{
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };
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
            }
        ]
    };
    render(){
        return (
            <div className = "container">
                <Header></Header>
                <Todos todos={this.state.todos} handleChange = {this.handleCheckboxchange}></Todos>,
            </div>
        );
    }
}
export default TodoApp;