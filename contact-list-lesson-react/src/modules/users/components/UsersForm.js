import React from 'react';

function UsersForm({onSave, currentUser}) {
    function onFormSubmit (e){
        e.preventDefault();

        const form = e.target.elements;

        onSave({
            id: form.id.value,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
        });

        e.target.reset();
    }

    return (
        <form className="row" onSubmit={onFormSubmit}>
            <div className="three columns">
                <input type="text" name="id" defaultValue={currentUser.id}/>
                <input type="text" defaultValue={currentUser.name} name="name" placeholder="Name"/></div>
            <div className="three columns"><input type="text" defaultValue={currentUser.surname} name="surname" placeholder="Surname"/></div>
            <div className="three columns"><input type="text" defaultValue={currentUser.email} name="email" placeholder="Email"/></div>
            <div className="three columns"><button>Save</button></div>
        </form>
    );

}

export default UsersForm;