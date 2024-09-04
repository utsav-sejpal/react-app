import React, { Component } from 'react';

export default class ClassComponent1 extends Component {

    constructor(props) {
        super()
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <br />
                Data: {this.props.data}
                <h1>Class Component 1</h1>
            </>
        )
    }
}