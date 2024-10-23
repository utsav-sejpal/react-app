import { useDispatch } from "react-redux"
import { increment } from "../components/practice/redux/counterSlice"

export default function IndexComponent() {
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => dispatch(increment())}>+</button>
            <h1>Index Component</h1>
        </>
    )
}
