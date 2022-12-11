import React, {Component} from 'react';

class ListItem extends Component {
    onDeleteClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.contacts.id);
    }

    render() {
        return (
            <ul>
                <li>{this.props.contacts.name}</li>
                <li>{this.props.contacts.surname}</li>
                <li>{this.props.contacts.phone}</li>
                <button onClick={this.onDeleteClick}>Delete</button>
            </ul>
        )
    };
}

export default ListItem;