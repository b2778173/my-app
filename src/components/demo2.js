import React from 'react'

export default class demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { names: ['Alice', 'Emily', 'Kate'], }
    }
    render() {
        return (
            <div>
                {this.state.names.map(function (name, index) {
                    return <div key={index}>Hello, {name}&nbsp;</div>
                })}
                {this.props.children}
            </div>
        )
    }
}