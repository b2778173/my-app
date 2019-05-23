import React from 'react'

export default class demo10 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: 1.0
        }
    }

    componentDidMount() {
        this.timer = setInterval(function () {
            let opacity = this.state.opacity;
            opacity -= 0.1;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({ opacity: opacity });
        }.bind(this), 100);
    }

    render() {
        return (<div style={{ opacity: this.state.opacity }}>Hello {this.props.match.params.name}</div>);
    }
}