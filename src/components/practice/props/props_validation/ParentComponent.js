import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <ChildComponent name="Test User" count={1} size='' />
        </div>
    )
}
