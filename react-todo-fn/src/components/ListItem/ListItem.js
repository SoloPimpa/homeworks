import React from "react";
import "./ListItem.css";
function ListItem({todo, onToggle}) {

    return (
        <div
            className={'task-item' + (todo.isDone ? ' done': '')}
            onClick={()=> onToggle(todo.id)}
        >
            {todo.title}
            <span className="delete-btn">x</span>
        </div>
    );
}

export default ListItem;



