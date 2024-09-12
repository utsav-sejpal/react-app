import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent name="Test User" count={1} size='' />
        </div>
    )
}
