import React, { useState } from 'react'
import ChildrenComponent from './ChildrenComponent';

export default function ParentComponent() {
    const [data, setData] = useState('Parent Component Data.');
    const getData = (data) => {
        setData(data);
    }
    return (
        <div>
            <h1>Lifting State UP</h1>
            <h3>{data}</h3>
            <ChildrenComponent sendData={getData} />
        </div>
    )
}
