import './Form.css'

import React, {Component} from "react";

export default class Form extends Component {

    state = {
        values: {
            title: '',
        },
        errors: {},
        isDirty: {},
        isValid: false,
    };

    onInputChange = (e) => {
        const values = {
            ...this.state.values,
            [e.target.name]: e.target.value,
        };

        let errors = this.validate(values);

        this.setState({
            values: values,
            errors: errors,
            isValid: !Object.keys(errors).length,
            isDirty: {
                ...this.state.isDirty,
                [e.target.name]: true,
            },
        });
    };

    validate({title}) {
        let errors = {};
        if (title === '') {
            errors.title = 'Title is required';
        }
        return errors;
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSave(this.state.values);

        e.target.reset();
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                    <input name="title" value={this.state.values.title} onChange={this.onInputChange} />

                <button disabled={!this.state.isValid}>Save</button>
                {this.state.isDirty.title && this.state.errors.title ? (
                    <div className="error">
                        {this.state.errors.title}
                    </div>
                ) : null}
            </form>
        );
    }
}








// import './Form.css';
// import React, {Component} from 'react';
//
// export default class Form extends Component {
//     state = {
//         values: {
//             todo: '',
//         },
//         errors:{
//             todo: '',
//         },
//         isDirty: {},
//     }
//
//     onInputChange = (e) => {
//         let values ={
//                 ...this.state.values.todo,
//                 [e.target.name]: e.target.value,
//             };
//
//         this.setState({
//             values: values,
//             errors:this.validate(values),
//             isDirty:{
//                 ...this.state.isDirty,
//                 [e.target.name]: true,
//             },
//         });
//
//     };
//
//     validate({todo}){
//         let errors ={};
//         if(todo === ''){
//             errors.todo = 'Todo is required';
//         }
//         return errors;
//     }
//
//     isValid() {
//         return !Object.keys(this.state.errors).length;
//     }
//
//     onFormSubmit = (e) => {
//         e.preventDefault();
//
//         this.props.onSave({
//             title: e.target.elements.newTodoName.value,
//         });
//         e.target.reset();
//     }
//
//
//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <input type="text" name="newTodoName" value={this.state.values.todo} onChange={this.onInputChange}/>
//                 {this.state.isDirty.todo && this.state.errors.todo ?
//                 <div className="errors">{this.state.errors.todo}</div>:null}
//                 <button disabled={!this.isValid()}>Save</button>
//             </form>
//         );
//     }
//
// }
