import React from 'react'

export default class demo5 extends React.Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>
                    })
                }
            </ol>
        )
    }
}