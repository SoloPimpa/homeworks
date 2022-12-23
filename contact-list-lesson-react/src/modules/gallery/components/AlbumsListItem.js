import React from 'react';
import {NavLink} from "react-router-dom";

function AlbumsListItem({album: {id, title}}) {

    return (
<NavLink to={'/gallery/' + id}>{title}</NavLink>
    )
}

export default AlbumsListItem;