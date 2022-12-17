import React from 'react';
import "./ListItem.css";

function ListItem({ contact, onDelete}) {

    return (
        <div className="contact-item">
            <div className="task-item">{ contact.name} </div>
            <div className="task-item">{ contact.surname}</div>
            <div className="task-item">{ contact.email}</div>
            <div>
                <button className="delete-btn" onClick={()=> {onDelete(contact.id)}}>Х</button>
            </div>
        </div>
    )}

export default ListItem;




