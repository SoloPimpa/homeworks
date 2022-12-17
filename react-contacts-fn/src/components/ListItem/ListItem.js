import React from 'react';
import "./ListItem.css";

function ListItem({ contact, onDelete, onEdit}) {

    return (
        <div className="contact-item">
            <div className="task-item">{ contact.name} </div>
            <div className="task-item">{ contact.surname}</div>
            <div className="task-item-email">{ contact.email}</div>
            <div>
                <button className="delete-btn" onClick={()=> {onDelete(contact.id)}}>Х</button>
                <button className="btn-edit" onClick={()=> {onEdit(contact.id)}}>edit</button>
            </div>
        </div>
    )}

export default ListItem;




