import React from 'react'
import { ACTIONS } from './App.js'

export default function Todo({ todo, dispatch }) {
    return (
        <div className='todo'>
            <span style={{ color: todo.complete ? '#AAA' : '#fff', textDecoration: todo.complete ? 'line-through' : 'none' }}>
                {todo.name}
            </span>


            <div>
                <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
                <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
            </div>
        </div>
    )
}
