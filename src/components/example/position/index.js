import React from 'react'
import './position.css'


export default class Position extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style1: {},
            style2: {},
            style3: {},
            style4: {},
        }
    }

    positionAbsClick() {
        console.log('style change')
        const style = { position: 'absolute', top: '50px', left: '50px' };
        this.setState({ style2: style });
    }
    render() {
        let { style1, style2, style3, style4 } = this.state;
        return (
            <div>
                <div className="div1" style={style1}>第一個div</div>

                <div className="div2" style={style2}>第二個div</div>

                <div className="div3" style={style3}>第三個div</div>

                <div className="div4" style={style4}>第四個div</div>
                <button onClick={this.positionAbsClick.bind(this)}>position: absolute</button>
            </div>)
    }
}