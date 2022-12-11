import React, {Component} from 'react';
import ListItem from "../ListItem/ListItem";

export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.contacts.map((item)=>(
                    <ListItem key={item.id} contacts={item} onDelete={this.props.onDelete}/>
                    ))}
            </div>
        );
    }
}
