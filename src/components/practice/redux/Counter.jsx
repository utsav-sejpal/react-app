import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button className='btn btn-success m-1'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment {count}
                </button>
                <button className='btn btn-danger m-1'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement {count}
                </button>
                <button className='btn btn-danger m-1'
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Increment by amount {count}
                </button>
            </div>
        </div>
    )
}