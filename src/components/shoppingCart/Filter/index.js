import React, { Component } from 'react';
import Checkcbox from '../checkBox';


const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];


export default class Filter extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h4 className="title">Sizes:</h4>
                {availableSizes.map(label => <Checkcbox label={label}></Checkcbox>)}
            </div>
        )
    }
}