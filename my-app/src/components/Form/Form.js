import React, {Component} from 'react';
import './Form.css';

export default class Form extends Component {
    state = {
        values: {
            todo: '',
        },
        errors:{
            todo:'',
        },
        isDirty: {
            todo:false,
        }
    }

    onInputChange = (e) => {
        const values ={
                ...this.state.values.todo,
                [e.target.name]: e.target.value,
            };

        this.setState({
            values: values,
            errors:this.validate(values),
            isDirty:{
                ...this.state.isDirty.todo,
                [e.target.name]: true,
            },
        });

    };

    validate(todo){
        let errors ={};
        if(todo === ''){
            errors.todo = 'Todo is required';
        }
        return errors;
    }

    isValid() {
        return !Object.keys(this.state.errors).length;
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSave({
            title: e.target.elements.newTodoName.value,
        });
        e.target.reset();
    }



    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input name="newTodoName" value={this.state.values.todo} onChange={this.onInputChange}/>
                {this.state.isDirty.todo && this.state.errors.todo ?
                <div className="errors">{this.state.errors.todo}</div>:null}
                <button disabled={!this.isValid()}>Save</button>
            </form>
        );
    }

}

// import './Form.css';
// import React, {Component} from 'react';
//
// export default class Form extends Component {
//     onFormSubmit =(e)=>{
//         e.preventDefault();
//
//         this.props.onSave({
//             name: e.target.elements.newName.value,
//             surname: e.target.elements.newSurname.value,
//             phone: e.target.elements.newPhone.value,
//         });
//         e.target.reset();
//     }
//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <input type="hidden" id="id" value=""/>
//                 <input name="newName" type="text"/>
//                 <input name="newSurname" type="text"/>
//                 <input name="newPhone" type="number"/>
//                 <button>Save</button>
//             </form>
//         );
//     }
// }

