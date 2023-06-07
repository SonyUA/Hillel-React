import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice.js";

import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((store) => store.counter);
    const handleIncrement = () => {
        dispatch(increment());
    };
    return (
        <div>
            <h1>Counter:{value}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default App;
