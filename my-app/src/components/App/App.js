import './App.css';

import {Component} from 'react';
import FormContact from "../FormContact/FormContact";
import List from "../List/List";
import Head from "../Head/Head";


class App extends Component {
    state = {
        contacts: [
            {id:1, name:'Bob', surname:'Bi', phone:'+380 01 00 000'},
            {id:2, name:'Pip', surname:'Pepsi', phone:'+380 02 00 000'},
            {id:3, name:'Mimi', surname:'Milk', phone:'+380 03 00 000'},
        ],
    };

    deleteContact =(id)=>{
        this.setState({
            contacts: this.state.contacts.filter((item) => item.id !==id)
        })
    };

    createContact=(newContact)=>{
        this.setState({
            contacts:[...this.state.contacts, {
                ...newContact,
                id: Date.now(),
            }]
        })
    };

    render() {
        return (
            <>
                <div>
                <Head/>
                <List contacts={this.state.contacts} onDelete={this.deleteContact}/>
                <FormContact onSave={this.createContact}/>
                </div>
                </>
        );
    }
}

export default App;

