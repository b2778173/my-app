import React, { Component } from 'react'
import TodoList from './toDoList'
import './toDo.css'

export default class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolists: [
                { index: 1, value: "learn react", done: false }, { index: 2, value: "Go shopping", done: true }, { index: 3, value: "buy flowers", done: true }
            ]
        }
    }
    removeItem(index) {
        console.log(this.state.todolists);
        console.log('will remove ' + index);
        this.state.todolists.splice(index, 1);
        console.log(this.state.todolists);
        this.setState({ todolists: this.state.todolists });
    }
    render() {
        return (
            <div id="main">

                <TodoList items={this.state.todolists} removeItem={this.removeItem.bind(this)} />

            </div>
        );
    }
}