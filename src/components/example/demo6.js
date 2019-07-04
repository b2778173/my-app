import React from 'react'
import PropTypes from 'prop-types'

export default class demo6 extends React.Component {
    // static propTypes = {
    //     title: PropTypes.string.isRequired
    // }
    render() {
        return <h1>{this.props.title}</h1>
    }
}
demo6.propTypes = { title: PropTypes.string.isRequired }