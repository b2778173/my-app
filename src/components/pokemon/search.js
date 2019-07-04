import React from 'react'

export default (onChange, value) => (
    <input
        type='text'
        onChange={onChange}
        value={value}
        autoFocus />
)