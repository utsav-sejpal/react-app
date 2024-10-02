import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    let inputRef = useRef();
    return (
        <div>
            <ChildComponent ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    )
}
