import React from 'react'
import LifeCycle from './lifeCycle'

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            name: 'Parent',
        }
    }

    render() {
        return <LifeCycle name={this.state.name} />
    }
}