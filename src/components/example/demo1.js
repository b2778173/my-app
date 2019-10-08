import React, { useState, useEffect } from "react";
// 寫法一
// function demo1() {
//     return <h1>this is demo1</h1>
// }
// export default demo1;

// 寫法二
// export default () => <h1> this is demo1 </h1>

// 寫法三(傳參)
function demo1(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('useEffect!')
        document.title = `U clicked ${count} times`;
    });

    return (
        <div>
            <span>u clicked {count} times!</span>
            <h1>this is demo1, I am {props.name}</h1>
            <button onClick={() => setCount(count + 1)}>按!</button>
        </div>
    )

}
export default demo1;

