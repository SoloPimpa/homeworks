import React from 'react'
import ListItem from '../ListItem/ListItem';

function List({ contacts, onDelete, onEdit }){
    return (
        contacts.map((item)=> (
            <ListItem key={item.id} contact={item} onDelete={onDelete} onEdit={onEdit}/>
        ))
    )
}

export default List;