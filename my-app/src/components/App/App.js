import './App.css';

import react, {Component} from 'react';


class App extends Component {
    state = {
        num1: null,
        num2: null,
        result: 0,
    };

    onFirstInputChange = (e) => {
        let num1 = +(e.target.value)
        this.setState({
            num1: num1,
            result:
               this.calculate
        })
    };
    onSecondInputChange = (e) => {
        let num2 = +(e.target.value)
        this.setState({
            num2: num2,
            result: num2 + this.state.num1,
        })
    };

    onToggle =()=>{
        this.setState({
            result: this.state.result,
    })
    }

    calculate=()=>{
        this.setState({
            add : this.state.num1 + this.state.num2,
            sub : this.state.num1 - this.state.num2,
            milt : this.state.num1 * this.state.num2,
            div : this.state.num1 / this.state.num2,
        })
    };

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <input type="number" value={this.state.num1} onChange={this.onFirstInputChange}/>
                <select>
                    <option value="add">+</option>
                    <option value="sub">-</option>
                    <option value="div">/</option>
                    <option value="mul">*</option>
                </select>
                <input type="number" value={this.state.num2} onChange={this.onSecondInputChange}/>
                <button onClick={this.calculate}>Calculate</button>
                <p>Result: {this.state.result}</p>
            </div>
        );
    }
}

export default App;

