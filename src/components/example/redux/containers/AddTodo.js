import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                console.log(dispatch)
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Todo
        </button>
            </form>
        </div>
    )
}
export default connect()(AddTodo)