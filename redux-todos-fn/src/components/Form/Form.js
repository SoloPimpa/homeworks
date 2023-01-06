import React, {useState} from "react";
import "./Form.css";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/actions/todos";


function Form() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
        e.target.reset();
    }
    function handleInput (e){
        setValue(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="list">
                <div className="input-container">
                    <input type="text" className="u-full-width" name="title" value={value} onChange={handleInput}/>
                </div>
                <div className="btn-container">
                    <input type="submit" className="u-full-width" value="Add"/>
                </div>
            </div>
        </form>
    )
}

export default Form;


