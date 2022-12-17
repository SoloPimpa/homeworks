import './App.css';
import List from "../List/List";
import Form from "../Form/Form";
import Header from "../Header/Header";
import {useEffect, useState} from "react";
import {createItem, getContacts, removeItem, updateContact} from "../../services/serviceContacts";

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

    function editContact(id){
        const contact = contacts.find((item) => item.id === id);

        updateContact({...contact}).then((data) => {
            setContacts(contacts.map((item) => (item.id === id ? data: item)))
        });
        console.log(id);
    }

    return (
        <div className="contact-list">
            <Header/>
            <List contacts={contacts} onDelete={deleteContact} onEdit={editContact}/>
            <Form onSave={saveContact}/>
        </div>
    );
}

export default App;
