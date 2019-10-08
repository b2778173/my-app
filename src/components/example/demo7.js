import React from 'react'
// 方法一
// export default class demo7 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.myTextInput = React.createRef();
//     }
//     handleClick = () => {
//         console.log('this=', this);
//         console.log('this.myTextInput', this.myTextInput)
//         this.myTextInput.current.focus();
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myTextInput} />
//                 <input type="button" value="Focus the text input" onClick={this.handleClick} />
//                 <span>{typeof(this.handleClick)}</span>
//             </div>
//         );
//     }

// }



// 方法二 
export default class demo7 extends React.Component {
    constructor(props) {
        super(props);
        this.myTextInput = React.createRef();
    }
    handleClick(msg) {
        console.log('this=', this);
        console.log('msg=', msg)
        console.log('this.myTextInput', this.myTextInput)
        this.myTextInput.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myTextInput} />
                <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
                <input type="button" value="Focus the text input" onClick={(msg) => this.handleClick(msg)} />
                <span>{typeof (this.handleClick)}</span>
            </div>
        );
    }

}

// 方法三
// export default class demo7 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.myTextInput = React.createRef();
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick ()  {
//         console.log('this=', this);
//         console.log('this.myTextInput', this.myTextInput)
//         this.myTextInput.current.focus();
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myTextInput} />
//                 <input type="button" value="Focus the text input" onClick={this.handleClick} />
//             </div>
//         );
//     }

// }