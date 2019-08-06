import React from "react";
// 寫法一
// function demo1() {
//     return <h1>this is demo1</h1>
// }
// export default demo1;

// 寫法二
// export default () => <h1> this is demo1 </h1>

// 寫法三(傳參)
function demo1(props) {
    return <h1>this is demo1, I am {props.name}</h1>
}
export default demo1;

