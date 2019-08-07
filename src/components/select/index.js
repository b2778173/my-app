import React from 'react'

export default class Select extends React.Component {

    render() {
        return (
            <div>
                {/* defaultValue && value props for default of select element in React. Cannot be used in same time*/}
                <select
                    defaultValue='3'
                    // value='2'
                >
                    <option value='1'>one</option>
                    <option value='2'>two</option>
                    <option value='3'>three</option>
                </select>
            </div>
        )
    }
}