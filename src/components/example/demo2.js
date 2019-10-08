import React from 'react'

export default class demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { names: ['Alice', 'Emily', 'Kate'], test: null }
    }

    componentDidMount() {
        // for (var i = 0; i < 5; i++) {
        //     (function (i) {
        //         setTimeout(function () {
        //             console.log(i);
        //         }, 1000);
        //     })(i)
        // }

        // for (var j = 0; j < 5; j++) {
        //     setTimeout(function () {
        //         console.log(j);
        //     }, 1000);
        // }
    }
    componentDidUpdate() {
        console.log('test=', this.state.test);
    }
    render() {
        return (
            <div className=''>
                {this.state.names.map(function (name, index) {
                    return <div key={index}>Hello, {name}&nbsp;</div>
                })}
                {this.props.children}
                {/* 由Link state obj 傳入 */}
                {this.props.location.state.name}<br />
                {/* 由Route 傳入 */}
                {this.props.name}
            </div>
        )
    }
}

