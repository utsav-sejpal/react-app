import React from 'react'
import PropTypes from 'prop-types'

export default function ChildComponent(props) {
    return (
        <div>
            <h1>Child Component</h1>
            <p>{props.name}</p>
            <p>{props.count}</p>
        </div>
    )
}

ChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number,
    // size: PropTypes.oneOf(['small', 'medium', 'large'])
}
