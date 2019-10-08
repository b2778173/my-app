import React, { Component, Fragment } from 'react'

export default class Params extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{ value: '參數一' }, { value: '參數二' }, { value: '參數三' }]
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick(params) {
        console.log('this.state.date=', this.state.data)
        console.log(params);
    }
    render() {
        const { data } = this.state;
        return (
            <Fragment>
                <div>
                    {data.map((el, index) => (
                        <button
                            key={index}
                            onClick={() => this.handleClick(el.value)}>{el.value}</button>
                    ))}
                </div>

                <CustomButtons
                    data={this.state.data}
                    // this.handleClidk(params)寫法會立即執行 , 所以必須改變寫法
                    // handleClick={this.handleClick.bind(this)} /> (兩種綁法)
                    handleClick={(params) => this.handleClick(params)} />

            </Fragment>)
    }
}

function CustomButtons(props) {
    const { data } = props;
    return (
        data.map((el, index) => (
            < button
                key={index}
                // 若不使用箭頭函式, 直接寫 onClick={ props.handleClick(el.value)}, 會因為有參數的關係而立馬執行
                onClick={() => props.handleClick(el.value)} > {el.value}</button >
        ))
    )
}