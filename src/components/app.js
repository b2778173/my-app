import React from "react";
import { Link } from 'react-router-dom'

export default class app extends React.Component {

    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/app/demo1">demo1</Link></li>
                    <li><Link to="/app/demo3">demo3</Link></li>
                    <li><Link to="/app/demo4/30678">demo4</Link></li>
                    <li><Link to="/app/demo7">demo7</Link></li>
                    <li><Link to='/app/game'>game</Link></li>
                    <li><Link to='/app/demo8'>demo8</Link></li>
                    <li><Link to='/app/demo9'>demo9</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}