import './App.css';

import react, {Component} from 'react';


class App extends Component {
    state = {
        num1: '',
        num2: '',
        result: 0,
        operation: '+',
    };


    onFirstInputChange = (e) => {
        this.setState({
            num1: +e.target.value

        })
    };
    onSecondInputChange = (e) => {
        this.setState({
            num2:+e.target.value
        })
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
            //ксли одноименное, то можно прото написать: result,
        })
    };
    onOperatorChange=(e)=>{
        this.setState({
           operation:e.target.value,
        })
    };

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <input type="number" value={this.state.num1} onChange={this.onFirstInputChange}/>
                <select value={this.state.operation} onChange={this.onOperatorChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                    <option value="*">*</option>
                </select>
                <input type="number" value={this.state.num2} onChange={this.onSecondInputChange}/>
                <button onClick={this.calculate}>Calculate</button>
                <div>Result: {this.state.result}</div>
            </div>
        );
    }
}

export default App;

