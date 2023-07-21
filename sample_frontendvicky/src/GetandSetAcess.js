import { useState } from "react";
export const Hook=()=>
{
    const[user,setUser]=useState("")
    const display=()=>
    {
        alert(user+'added successfully')
    }
    const output=(temp)=>
    {
        setUser(temp.target.value)

    }
    return(
        <>
        <input type="text" placeholder="Enter name" name={user} onChange={output}/>
        <button className="btn btn-outline-danger" onClick={display}>Click</button>
        </>
    )
}