import React from "react";
import "./Form.css";


function Form({onSave}) {

    function onFormSubmit(e){
        e.preventDefault();

     onSave({
         title:e.target.title.value
     });
        e.target.reset();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="list">
                <div className="input-container">
                    <input type="text" className="u-full-width" name="title"/>
                </div>

                <div className="btn-container">
                    <input type="submit" className="u-full-width" value="Add"/>
                </div>
            </div>
        </form>
    )
}

export default Form;


