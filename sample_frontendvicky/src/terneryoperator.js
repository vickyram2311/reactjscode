import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
export const TernaryOperator=()=>

{
    const[wish,setWish]=useState("nothing")
    const[result,setResult]=useState("")
    const[changes,setChanges]=useState({color:'red',backgroundcolor:'black'})

    const trigger=(temp)=>
    {
        setWish(temp.target.value)

    }
    const ternarysample=()=>
    {
        (wish=='spring')?
        setChanges({color:'green',backgroundcolor:'black'}):
        (wish=='winter')?
        setChanges({color:'seagreen',backgroundcolor:'black'}):
        (wish=='rainy')?
        setChanges({color:'blue',backgroundcolor:'black'}):
        (wish=='summer')?
        setChanges({color:'yellow',backgroundcolor:'black'}):

        setChanges({color:'pink',backgroundcolor:'black'})

        setResult(wish)

    }
    return(
        <>
        <input placeholder='enter your fav season' type='text' onChange={trigger}/>
        <button onClick={ternarysample} className="btn btn-outline-secoundary" >Send</button>
        <p style={changes}>
            {result}
        </p>
        </>
    )
}