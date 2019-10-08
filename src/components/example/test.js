import React from "react";

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testState1: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        console.log(this.props);
    }


    // static getDerivedStateFromProps(nexProps, preState) {
    //     console.log('getDerivedStateFromProps invoked!');
    //     console.log(nexProps)
    //     console.log(preState)
    //     return {};
    // }

    changeState() {
        console.log('changeState!')
        this.setState({ testState1: 'state1' })
    }

    render() {
        return (
            <ChildTest propsFromTest={this.state.testState1} changeState={this.changeState.bind(this)} />
        )
    }

}

class ChildTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            childTestState: null
        }
    }
    // will be invoked when props update !
    // componentWillReceiveProps(props) {
    //     console.log('componentWillReceiveProps props', props);
    // }

    static getDerivedStateFromProps(newPrps, preState) {
        console.log('preState', preState);
        console.log('newPrps', newPrps)
        console.log('child getDerivedStateFromProps')
    }

    render() {
        return (
            <div>
                test<br />
                <button onClick={() => this.props.changeState()}>change props</button>
                <button onClick={() => { this.setState({ childTestState: 'hello world' }) }}>change child state</button>
                <li>{this.props.propsFromTest}</li>
                <li>{this.state.childTestState}</li>
            </div>
        )
    }

}