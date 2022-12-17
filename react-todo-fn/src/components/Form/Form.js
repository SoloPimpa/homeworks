import React from "react";
import "./Form.css";


function Form() {
    return (
        <form>
            <div className="list">
                <div className="input-container">
                    <input type="text" className="u-full-width"/>
                </div>

                <div className="btn-container">
                    <input type="submit" className="u-full-width" value="Add"/>
                </div>
            </div>
        </form>
    )
}

export default Form;


