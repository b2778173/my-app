import React, { Component } from 'react'


export default class TodoListItem extends Component {
    onClickClose() {
        console.log(this.props.index)
        this.props.removeItem(this.props.index);
    }

    onClickDone() {
        this.props.markChange(this.props.index);
    }
    render() {
        var todoClass = this.props.item.done ? 'done' : 'undone';
        return (
            <li className="list-group-item">
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone.bind(this)}></span>
                    {this.props.item.value}
                    <button type='button' className='close' onClick={this.onClickClose.bind(this)}>&times;</button>
                </div>
            </li>
        );
    }
}
