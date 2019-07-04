import React from 'react'

export default class demo4 extends React.Component {

    render() {
        return <h1>Hello {this.props.match.params.name}</h1>
    }
}