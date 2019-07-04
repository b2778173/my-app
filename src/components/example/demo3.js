import React from "react";

export default class demo3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: [<h1>demo3!</h1>, <h2>React is awesome!</h2>,] }
    }
    render() {
        return (
            <div>{this.state.arr}</div>
        );
    }

}