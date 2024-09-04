import React, { Component } from 'react';
import ClassComponent1 from './ClassComponent1';

export default class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            showComponent: false
        }
        console.log('constructor');
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1,
            showComponent: !this.state.showComponent
        });
    }

    showComponent = () => {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <>
                <h3>Count: {this.state.count}</h3>
                <h3>Show Component: {this.state.showComponent}</h3>
                <button onClick={() => this.showComponent()}>Show Component</button>
                {this.state.showComponent ? <ClassComponent1 data="Data from parent component" /> : ''}
                <button onClick={() => this.increaseCount()}>Increase Count</button>
            </>
        )
    }
}