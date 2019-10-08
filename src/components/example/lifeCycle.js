import React from 'react'

export default class LifeCycle extends React.Component {
    _ismounted = false;
    constructor(props) {
        super(props);
        console.log('constructor');
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'Mark',
            value: '3'
        }
    }
    handleClick() {
        this.setState({ name: this.state.name === 'Zuck' ? 'Mark' : 'Zuck' });
    }
    onChangeHandle(e) {
        console.log('onChange')
        const value = e.target.value;
        this.setState({ value })
    }
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }
    componentDidMount() {
        this._ismounted = true;
        console.log('componentDidMount');
        // this.setProps({ name: 'Nash' });
        console.log(this)
    }
    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps', nextProps);
    // }
    static getDerivedStateFromProps(nextProps, preState) {
        console.log('getDerivedStateFromProps', 'nextProps=', nextProps, 'preState=', preState);
        const name = preState.name;
        const value = preState.value;
        return { name, value }
    }
    shouldComponentUpdate(nextProps, nextState) {

        console.log('shouldComponentUpdate');

        if (this.props.name !== nextProps.name) {
            console.log('props need update!')
            return true;
        }
        if (this.state.name !== nextState.name||this.state.value !== nextState.value) {
            console.log('state need update!')
            return true;
        }
        console.log('no need update!')
        return false;
    }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                <h1>React Life Cycle</h1>
                <select value={this.state.value} onChange={e => this.onChangeHandle(e)}>
                    <option value='1'>one</option>
                    <option value='2'>two</option>
                    <option value='3'>three</option>
                </select>
                <div onClick={this.handleClick}>Hi, {this.state.name}</div>
            </div>
        );
    }
}