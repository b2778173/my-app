import React, { Component } from 'react';

export default class Checkcbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
    }
    toggleCheckboxChange() {
        const { handleCheckboxChange, label } = this.props;
        this.setState({ isChecked: !this.state.isChecked });
        handleCheckboxChange(label);
    }

    render() {
        const { label, classes } = this.props;
        const { isChecked } = this.state;

        return (
            <div className={classes}>
                <label>
                    <input
                        type='checkbox'
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange.bind(this)}
                    />
                    <span>{label}</span>
                </label>
            </div>
        );
    }
}