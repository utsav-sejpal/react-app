import React from 'react'

const handelClick = () => console.log('clicked');

export default function EventComponent() {
    return (
        <div>
            <h1>Events</h1>
            <button onClick={handelClick}>Click</button>
            <button onClick={() => alert('clicked!')}>Alert</button>
        </div>
    )
}
