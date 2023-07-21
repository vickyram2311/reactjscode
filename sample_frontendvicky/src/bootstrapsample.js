import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let SamplebootstrapExample=()=>
{
    const connect=()=>
    {
        alert('apple is mostly recommanded for all people')
    }
    return(
        <>
        <link src="Mycss.css" rel="stylesheet"></link>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>value</th>
                </tr>
            </thead>
        </table>
        <button classname="btn btn-outline-sucess text-dark" onclick={connect}>Apple<i class="bi bi-apple"></i></button>
                
        </>
    )
}

