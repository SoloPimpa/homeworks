import React, {useEffect, useRef, useState} from 'react';

function Posts() {
    const inputRef = useRef();

    function onClick(){
        inputRef.current.focus();
    }

    return (
        <div>
            <button onClick={onClick}>Click me</button>
            <input ref={inputRef} type="text" name="name"/>
        </div>
    );

//...
// const timerRef = useRef(0);
//
// useEffect(()=>{
//         timerRef.current = setInterval(()=> console.log('hello'), 1000);
//         return()=> clearInterval(timerRef.current);
// },[])
//         return (
//             <div>{timerRef.current}
//             <button onClick={()=>clearInterval(timerRef.current)}>Click me</button></div>
//         );

}

export default Posts;