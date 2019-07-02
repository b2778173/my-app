import React from 'react'
import TodolistItem from './TodoListItem'

export default class todolist extends React.Component {


    render() {
        var items = this.props.items.map((item, index) => <TodolistItem key={index} index={index} item={item} removeItem={this.props.removeItem}>{item.value}</TodolistItem>
        )
        return (
            <ul className='list-group'>{items}</ul>
        )
    }
}