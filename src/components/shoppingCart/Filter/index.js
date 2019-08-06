import React, { Component } from 'react';
import Checkcbox from '../checkBox';
import './style.scss'

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];


export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCheckboxes: []
        }
    }
    
    componentDidMount() {
    }

    toggleCheckbox(label) {
        let selectedCheckboxesLocal = Array.from(this.state.selectedCheckboxes);
        let index = selectedCheckboxesLocal.indexOf(label);
        if (!this.state.selectedCheckboxes.includes(label)) {
            selectedCheckboxesLocal.push(label);
        } else {
            selectedCheckboxesLocal.splice(index, 1);
        }
        console.log(selectedCheckboxesLocal)
        this.setState({ selectedCheckboxes: selectedCheckboxesLocal });
    }
    createCheckbox(label) {
        return <Checkcbox
            classes="filters-available-size"
            label={label}
            handleCheckboxChange={this.toggleCheckbox.bind(this)}
            key={label}
        />
    }
    createCheckboxes() {
        return availableSizes.map((label) => this.createCheckbox(label));
    }
    render() {
        return (
            <div className="filters">
                <h4 className="title">Sizes:</h4>
                {this.createCheckboxes()}
            </div>
        )
    }
}


