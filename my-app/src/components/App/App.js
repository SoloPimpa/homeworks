import './App.css';

import react, {Component} from 'react';


class App extends Component {
    state = {
        num1: '',
        num2: '',
        result: 0,
        operation: '+',
    };


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'number' ? +e.target.value :e.target.value,

        });
    };


    calculate=()=>{
        let result = 0;
        switch(this.state.operation){
            case '+': result = this.state.num1 + this.state.num2; break;
            case '-': result = this.state.num1 - this.state.num2; break;
            case '/': result = this.state.num1 / this.state.num2; break;
            case '*': result = this.state.num1 * this.state.num2; break;
        }
        this.setState({
            result: result,
            //if одноименное, то можно просто написать: result,
        })
    };

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <input name="num1" type="number" value={this.state.num1} onChange={this.onChange}/>
                <select name="operation" value={this.state.operation} onChange={this.onChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                    <option value="*">*</option>
                </select>
                <input name="num2" type="number" value={this.state.num2} onChange={this.onChange}/>
                <button onClick={this.calculate}>Calculate</button>
                <div>Result: {this.state.result}</div>
            </div>
        );
    }
}

export default App;

