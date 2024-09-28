import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    const components = {
        ram: 512,
        cpu: 'i5 4th Gen',
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent name="Test User" count={1} size='' components={components} />
        </div>
    )
}
