import { useEffect, useState } from "react";

export default function MyComponent(){
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())
    const [text, setText] = useState('')

    const tick = () => {
        console.log('Clock running... checking from tick function')
        setDate(new Date());
    }
// The useEffect will used when count will update
    useEffect(()=>{
        console.log('Updating ......')
        document.title = `Clicked ${count} times`
    },[count])


     useEffect(()=>{
        // console.log(date.toLocaleTimeString())
        const interval = setInterval(tick, 1000)


// do the cleanup - stop the timer
 return () => {
    console.log('component unmounted')
    clearInterval(interval)
 }


     },[])



    const addClick = ()=>{
         setCount((prevCount) => prevCount+1);

    }

    return (
        <div>
            <p>It is from MyComponent Function</p>
            <p>
                <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
            </p>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}