import List from "../List/List";
import Form from "../Form/Form";
import {useEffect} from "react";
import api from '../../api';
import {setTodos} from "../../store/actions/todos";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        api.get('todos').then(({data})=> dispatch(setTodos(data)));
    }, []);

    return (
        <div className="container">
            <List/>
            <Form/>
        </div>
    );
}

export default App;
