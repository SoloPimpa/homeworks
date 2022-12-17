import React from 'react';
import "./Form.css";
function Form({onSave}) {
    function onFormSubmit(e) {
        e.preventDefault();

        onSave({
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
        });
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className="contact-form">
                <div><input type="text" placeholder="Name" name="name"/></div>
                <div><input type="text" placeholder="Surname" name="surname"/></div>
                <div><input type="text" placeholder="Email" name="email"/></div>
                <div><button className="save-btn">save</button></div>
            </form>
        </div>
    )
}

export default Form;