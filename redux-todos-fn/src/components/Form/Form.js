import React from "react";
import "./Form.css";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/actions/todos";


function Form() {
    const dispatch = useDispatch();

    function onFormSubmit(e) {
        e.preventDefault();
        dispatch(addTodo({title: e.target.title.value}));
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


