import './Form.css';
import React, {Component} from 'react';

export default class FormContact extends Component {
    onFormSubmit =(e)=>{
        e.preventDefault();

        this.props.onSave({
            name: e.target.elements.newName.value,
            surname: e.target.elements.newSurname.value,
            phone: e.target.elements.newPhone.value,
        });
        e.target.reset();
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="hidden" id="id" value=""/>
                <input name="newName" type="text"/>
                <input name="newSurname" type="text"/>
                <input name="newPhone" type="number"/>
                <button>Save</button>
            </form>
        );
    }
}

