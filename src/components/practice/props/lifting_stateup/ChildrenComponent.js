import React from 'react'

export default function ChildrenComponent(props) {
    const data = 'Changed data from child component!';

    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={() => props.sendData(data)}>Send Data</button>
        </div>
    )
}
