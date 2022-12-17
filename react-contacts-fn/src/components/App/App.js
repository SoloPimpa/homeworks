import './App.css';
import List from "../List/List";
import Form from "../Form/Form";
import Header from "../Header/Header";
import {useEffect, useState} from "react";
import {createItem, getContacts, removeItem} from "../../services/serviceContacts";


function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts().then(setContacts)
    }, []);

    function deleteContact(id) {
        removeItem(id).then(() => {
            setContacts(contacts.filter((item) => item.id !== id));
        });
    }

    function saveContact(newContact) {
        createItem({...newContact}).then((data) => setContacts([...contacts, data]));
    }

    return (
        <div className="contact-list">
            <Header/>
            <List contacts={contacts} onDelete={deleteContact}/>
            <Form onSave={saveContact}/>
        </div>
    );
}

export default App;
