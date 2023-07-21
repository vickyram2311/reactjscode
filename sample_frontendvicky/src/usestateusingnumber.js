import { useState } from "react"

export let Usestate2=()=>
{
    const[count,setCount]=useState(0)

    const counting1=()=>
    {
        setCount(count+10);
    }
    const CountingZero=()=>
    {
        setCount(0);
    }
    return(
        <>
        <button onClick={counting1} onDoubleClick={CountingZero}>Single Click value is counted,double click value is null(zero)</button>
        <spam style={{color:'red',backgroundcolor:'white'}}>
            {count}    
        </spam>        
        </>
    )
}