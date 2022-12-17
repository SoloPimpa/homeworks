import React from 'react'
import ListItem from '../ListItem/ListItem';

function List({ contacts, onDelete }){
    return (
        contacts.map((item)=> (
            <ListItem key={item.id} contact={item} onDelete={onDelete} />
        ))
    )
}

export default List;