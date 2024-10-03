import React, { Fragment } from 'react'

export default function FragmentComponent() {
    let items = ['keyboard', 'mouse', 'cpu', 'printer'];
    return (
        <>
            {items.map((value, index) =>
                <Fragment key={index}>
                    {value}
                </Fragment>
            )}
        </>
    )
}
