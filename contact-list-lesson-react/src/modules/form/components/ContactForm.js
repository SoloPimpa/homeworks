import React from 'react';
// import {useRef} from "react";
import {useNavigate} from "react-router-dom";


function ContactForm ({onSave, currentUser}) {
const navigate = useNavigate();

    // const inputRef = useRef();
    //
    // function onClick(){
    //     inputRef.current.focus();
    // }
    function onClickBtnBack(){
        navigate('/users');
    }

    const handleSubmit = e =>{
        e.preventDefault();
        navigate('/users');
    }


    return (
        <>
        <div>
            {/*<button onClick={onClick}>Click me</button>*/}
            <button onClick={onClickBtnBack}>Back</button>

        </div>
    <form className="row" onSubmit={handleSubmit}>

        <div className="three columns">
            <input type="hidden" name="id"/>
            <input type="text" name="name" placeholder="Name"/></div>
        <div className="three columns"><input type="text" name="surname" placeholder="Surname"/></div>
        <div className="three columns"><input type="text" name="email" placeholder="Email"/></div>
        <div className="three columns"><button>Save</button></div>
    </form>
            </>
    );

}

export default ContactForm;