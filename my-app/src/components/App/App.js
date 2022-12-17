import './App.css';

import {Component} from 'react';
import Form from "../Form/Form";
import List from "../List/List";
import {createTodo, deleteTodo, getTodo, toggleTodo} from "../../services/todoService";


class App extends Component {
    state = {
        todos: [],
    };

    toggleTodo =(id)=>{

        const todo = this.state.todos.find((item) => item.id === id);

        toggleTodo({...todo, isDone: !todo.isDone}).then((data)=> {
            this.setState({
                todos: this.state.todos.map((item) => item.id === id ? data : item),
            })
        })
    }


    deleteTodo =(id)=>{
        deleteTodo(id).then(()=>{
            this.setState({
                todos: this.state.todos.filter((item) => item.id !==id)
            })
        })
    };

    createTodos=(newTodo)=>{
        createTodo(newTodo).then((data)=>{
            this.setState({
                todos:[...this.state.todos, data],
            })
        })
    };

    render() {
        return (
            <>
                <List todos={this.state.todos} onToggle={this.toggleTodo} onDelete={this.deleteTodo}/>
                <Form onSave={this.createTodos}/>
            </>
        );
    }

    componentDidMount() {
        getTodo().then(data => this.setState({
            todos:data
        }))
    }
}

export default App;
