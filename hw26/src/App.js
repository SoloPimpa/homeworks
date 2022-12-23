import React, {useEffect, useState} from 'react';
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ContactDetail from './components/ContactDetail';
import ContactDeleteConfirm from './components/ContactDeleteConfirm'
import EditContact from "./components/EditContact";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  const removeCotnactHandler = (id) => {
    const newContactList = contacts.filter((contact)=> {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  return (
      <div className="ui container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" exact element={<ContactList/>}/>
            <Route path="/add" element={<AddContact/>}/>
            <Route path="/edit" element={<EditContact/>}/>
            <Route path="/contact/:id" element={<ContactDetail/>}/>
            {/*<Route path="/deleteContactConfirm/:id" render={(props) => (<ContactDeleteConfirm {...props} removeContact={removeCotnactHandler} />)}/>*/}
          </Routes>



        </Router>

      </div>
  );
}

export default App;