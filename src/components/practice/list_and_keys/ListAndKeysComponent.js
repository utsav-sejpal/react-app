import React from 'react'

export default function ListAndKeysComponent() {
    let items = ['keyboard', 'mouse', 'cpu', 'printer'];
    return (
        <div>
            <ul>
                {items.map((value, index) =>
                    <li>{value}</li>
                )}
            </ul>
        </div>
    )
}
