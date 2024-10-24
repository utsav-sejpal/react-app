import { useDispatch, useSelector } from "react-redux"
import { increment, toggleLoaderValue } from "../components/practice/redux/counterSlice"
import { addData } from "../components/practice/redux/UserSlice";

export default function IndexComponent() {
    const dispatch = useDispatch()
    const loaderValue = useSelector((state) => state.counter.loading)
    const usersData = useSelector((state) => state.users)
    console.log(usersData);

    return (
        <>
            <button onClick={() => dispatch(toggleLoaderValue())}>Loader {loaderValue ? 'Enabled' : 'Disabled'}</button>
            <br />
            <button onClick={() => dispatch(increment())}>+</button>
            <br />
            <button onClick={() => dispatch(addData())}>+</button>
            <h1>Index Component</h1>
        </>
    )
}
