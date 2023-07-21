import {usestate} from "react";
export let Gettersetter=()=>
{
    const[user,setUser]=usestate("")
    

    const print=()=>
    {
        alert(user+'has added sucessfully')
    }

    const result=(temp)=>
    {
        setUser(temp.target.value)
    }

    return(
        <>
        <input type="text" placeholder="enter ur curush name" name={user} onchange={result}/>
        <button classname="btn btn-outline-danger" onclick={print}>click</button>
        </>
    )
}