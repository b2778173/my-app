import React from 'react'

export default class input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Hi U!'
        }
    }
    render() {
        let value = this.state.value;
        return (
            <div>
                <input type='text' value={value} onChange={this.handleChange.bind(this)} />
                <p>{value}</p>
            </div>
        )
    } s
    handleChange(event) {
        console.log('event=', event);
        console.log('target=', event.target)
        this.setState({ value: event.target.value })
    }
}
