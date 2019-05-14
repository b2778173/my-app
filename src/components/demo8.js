import React from 'react'

export default class demo8 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    handleClick() {
        this.setState({
            liked: !this.state.liked
        });
    }
    render() {
        var text = this.state.liked ? 'like' : 'havent liked';
        return (
            <button onClick={this.handleClick.bind(this)}>
                {text}
            </button>
        )
    }
}