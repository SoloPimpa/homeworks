import './ListItem.css';
import React, {Component} from 'react';

class ListItem extends Component {
    onItemClick = () => {
        this.props.onToggle(this.props.todo.id);
    };

    onDeleteClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.todo.id);
    }

    render() {
        return (
            <li className={'item ' + (this.props.todo.isDone ? 'done' : '')}
                onClick={this.onItemClick}>
                <div>
                {this.props.todo.title}
                <button onClick={this.onDeleteClick}>Delete</button>
                </div>
            </li>
        )
    };
}

export default ListItem;
