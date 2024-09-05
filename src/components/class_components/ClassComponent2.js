import React, { Component } from 'react';

export default class ClassComponent2 extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <h1>Class Component 2</h1>
                {this.props.number}
            </>
        )
    }
}