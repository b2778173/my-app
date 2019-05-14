import React from 'react'

export default class demo7 extends React.Component {
    constructor(props) {
        super(props);
        this.myTextInput = React.createRef();
    }
    handleClick = () => {
        console.log('this=', this);
        console.log('this.myTextInput', this.myTextInput)
        this.myTextInput.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myTextInput} />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }

}
// 方法三 
// export default class demo7 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.myTextInput = React.createRef();
//     }
//     handleClick() {
//         console.log('this=', this);
//         console.log('this.myTextInput', this.myTextInput)
//         this.myTextInput.current.focus();
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myTextInput} />
//                 <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
//             </div>
//         );
//     }

// }