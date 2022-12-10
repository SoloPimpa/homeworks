import './App.css';

import react, {Component} from 'react';


class App extends Component {
    state = {
        result: 0,
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.calculate(e.target.elements.num1.value, e.target.elements.num2.value, e.target.elements.operation.value
        );
    };

    calculate(a, b, operator) {
        let result = 0;
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '/':
                result = a / b;
                break;
            case '*':
                result = a * b;
                break;
        }
        this.setState({
            result: result,
            //if одноименное, то можно просто написать: result,
        })
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <input name="num1" type="number"/>
                    <select name="operation">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                    <input name="num2" type="number"/>
                    <button>Calculate</button>
                </form>
                <div>Result: {this.state.result}</div>
            </div>
        );
    }
}

export default App;

