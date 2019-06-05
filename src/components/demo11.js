import React from 'react'
import $ from  'jquery'

export default class Demo11 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            lastGistUrl: ''
        };
    }

    componentDidMount() {
        $.get(this.props.source, function (res) {
            let lastGist = res[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    }

    render() {
        return (
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>go</a>
            </div>
        );
    }

}