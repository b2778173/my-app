import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../../app'
import demo4 from '../demo4'
import demo7 from '../demo7'
import Demo1 from '../demo1'
import Demo2 from '../demo2'
import demo3 from '../demo3'
import demo8 from '../demo8'
import demo9 from '../demo9'
import demo10 from '../demo10'
import Demo12 from '../demo12'
import toDoApp from '../../toDo/toDoApp'
import Test from '../test'
import Game from '../../../index'
import {Square} from '../../../index'

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
        <Router>
            <App exact path='/app' />
            <div className='content' >
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                    </ul>
                </nav> */}
                <div style={{ backgroundColor: 'pink' }}>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                    <Route path='/app/square/' component={Square} />
                    <Route path='/app/demo1' component={Demo1} />
                    <Route path='/app/demo2' render={(props) => { console.log('props=', props); return (<Demo2 {...props} name='我是Route傳入的name' />) }} />
                    <Route path='/app/demo3' component={demo3} />
                    <Route path='/app/demo4/:name' component={demo4} />
                    <Route path='/app/demo7' component={demo7} />
                    <Route path='/app/game' component={Game} />
                    <Route path='/app/demo8' component={demo8} />
                    <Route path='/app/demo9' component={demo9} />
                    <Route path='/app/demo10/:name' component={demo10} />
                    <Route path='/app/demo12/' component={Demo12} />
                    <Route path='/app/toDoApp/' component={toDoApp}></Route>
                    <Route path='/app/test' render={testProps => <Test {...testProps} />} />
                    <Route path='/AppRouter' component={AppRouter} />
                </div>
            </div>
        </Router>
    );
}

export default AppRouter;