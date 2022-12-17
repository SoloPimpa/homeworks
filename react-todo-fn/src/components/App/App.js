// import './App.css';

import List from "../List/List";
import Form from "../Form/Form";
import {useEffect, useState} from "react";
import {getList, updateItem} from "../../services/todosService";

function App() {
    const [list, setList]=useState([]);

    useEffect(()=>{
        getList().then(setList);
    },[]);

    function toggleTodo(id){
        const todo = list.find((item) => item.id === id);

        updateItem({...todo, isDone: !todo.isDone}).then((data) => {
            setList(list.map((item) => (item.id === id ? data: item)))
        });

    }

    return (
        <div className="container">
            <List todos={list} onToggle={toggleTodo}/>
            <Form/>
        </div>
    );
}

export default App;
