import React, {useRef} from 'react';

function UsersForm({onSave, currentUser}) {

    const formRef = useRef();

    function onClick (e){
        e.preventDefault();

        const form = formRef.current.elements;

        onSave({
            id: form.id.value,
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
        });

        form.current.reset();
    }

    return (
        <form className="row" ref={formRef}>

            <div className="three columns">
                <input type="hidden" name="id" defaultValue={currentUser.id}/>
                <input type="text" defaultValue={currentUser.name} name="name" placeholder="Name"/></div>
            <div className="three columns"><input type="text" defaultValue={currentUser.surname} name="surname" placeholder="Surname"/></div>
            <div className="three columns"><input type="text" defaultValue={currentUser.email} name="email" placeholder="Email"/></div>
            <div className="three columns"><button onClick={onClick} type="button">Save</button></div>
        </form>
    );

}

export default UsersForm;