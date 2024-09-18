import React, { useEffect, useState } from 'react'

export default function UseEffectHookComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('hello');
        console.log(count);
        // setTimeout(() => {
        //     setCount((count) => count + 1);
        // }, 2000);
    })
    return (
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={() => setCount(count + 1)}> + {count}</button>
        </div>
    )
}
