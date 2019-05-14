import React from "react";
import { Link } from 'react-router-dom'

export default class app extends React.Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/demo1">demo1</Link></li>
                    <li><Link to="/demo3">demo3</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}