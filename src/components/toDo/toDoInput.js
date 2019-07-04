import React from 'react'

export default class ToDoInput extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        if (this.refs.itemName.value) {
            this.props.addItem(this.refs.itemName.value);
        }
        this.refs.form.reset();
    }
    render() {
        return (
            <form ref='form' className="form-inline" onSubmit={this.onSubmit.bind(this)}>
                <input ref='itemName' className='form-control'></input>
                <button className='btn btn-primary'>add event</button>
            </form>
        );
    }
}