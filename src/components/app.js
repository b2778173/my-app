import React from "react";
import { Link } from 'react-router-dom'

export default class app extends React.Component {
    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        var data = { pathname: '/app/demo2', state: { name: '我是Link傳來的name' } };
        return (
            <div >
                <h1>App</h1>
                <ul className='sidebar'>
                    <li><Link to="/app/demo1">demo1</Link></li>
                    <li><Link to={data}>demo2</Link></li>
                    <li><Link to="/app/demo3">demo3</Link></li>
                    <li><Link to="/app/demo4/30678">demo4</Link></li>
                    <li><a href="/app/demo4/30678a">demo4a</a></li>
                    <li><Link to="/app/demo7">demo7</Link></li>
                    <li><Link to='/app/game'>game</Link></li>
                    <li><Link to='/app/demo8'>demo8</Link></li>
                    <li><Link to='/app/demo9'>demo9</Link></li>
                    <li><Link to='/app/demo10/30678'>demo10</Link></li>
                    <li><Link to='/app/demo12'>demo12</Link></li>
                    <li><Link to='/app/toDoApp'>Memo</Link></li>
                    <li><Link to='/app/Test'>Test</Link></li>
                    <li><Link to='/app/shoppingCart'>shoppingCart</Link></li>
                    {/* <li><Link to='/app'>Home</Link></li> */}
                    {/* <li><Link to='/about/'>About</Link></li>
                    <li><Link to='/users/'>users</Link></li> */}
                    <li><Link to='/app/life-cycle'>life-cycle</Link></li>
                </ul>
                <div className="content" style={{ backgroundColor: 'beige', margin: '30px', textAlign: 'center' }}>{this.props.children}</div>
            </div >
        )
    }
}