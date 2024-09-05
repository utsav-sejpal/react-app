import React, { Component } from 'react';
import ClassComponent2 from './ClassComponent2';

export default class ClassComponent1 extends Component {
    constructor(props) {
        super()
        this.state = {
            number: props.count
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('props');
    //     console.log(props);
    //     state.number = props.count;
    //     console.log('state');
    //     console.log(state);
    //     return { number: props.count };
    // }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <br />
                {/* Data: {this.state.number} */}
                Data: {this.props.count}
                <h1>Class Component 1</h1>
                {/* <ClassComponent2 number={this.state.number} /> */}
                <ClassComponent2 number={this.props.count} />
            </>
        )
    }
}