import List from "../List/List";
import Form from "../Form/Form";
import {useSelector} from "react-redux";
import {selectIsLoading} from "../../store/selectors/todos";

function App() {

const isLoading = useSelector(selectIsLoading);
    return (
        <div className="container">
            {isLoading ?( 'Loading ...'):
                (
                    <>
                    <List/>
            <Form/>
                    </>)}
        </div>
    );
}

export default App;
