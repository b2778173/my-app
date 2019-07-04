import React, { Component } from 'react'
import TodoList from './toDoList'
import Header from './toDoHeader'
import ToDoInput from './toDoInput'
import './toDo.css'
import styled from 'styled-components'

const Body = styled.body`
height: 100%;
color: #61DAFB;
`
export default class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolists: [
                { index: 1, value: "learn react", done: false }, { index: 2, value: "Go shopping", done: true }, { index: 3, value: "buy flowers", done: true }
            ]
        }
    }
    componentDidUpdate() {
        console.log('state=', this.state)
    }
    markChange(index) {
        console.log('this.state.todolists=', this.state.todolists);
        // deep copy
        var itemList = JSON.parse(JSON.stringify(this.state.todolists));
        var item = itemList[index];
        item.done = !item.done;
        console.log('變完itemList=', itemList);
        console.log('this.state.todolists=', this.state.todolists);
        this.setState({ todolists: itemList });
    }
    addItem(itemValue) {
        console.log(itemValue);
        let newItem = { index: this.state.todolists.length + 1, value: itemValue, done: false };
        this.state.todolists.unshift(newItem);
        this.setState({ todolists: this.state.todolists });
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
                <Header></Header>
                <Body><TodoList items={this.state.todolists} removeItem={this.removeItem.bind(this)} markChange={this.markChange.bind(this)} /></Body>
                <ToDoInput addItem={this.addItem.bind(this)}></ToDoInput>
            </div>
        );
    }
}