import React,{useState} from 'react'
import Home from  './Home'



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loggedin, setLoggedin] = useState(false)

    const handleEmail=(event)=>{
        setEmail(event.target.value)

    }

    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }

    const handleLoggedin=(event)=>{
        event.preventDefault()
        if(email==="ben@gmail.com"&& password==="9876")
        setLoggedin(true)
    }

    const handleLoggedout=(event)=>{
        setLoggedin(false)
    }

    return (

        <div>
        
            {loggedin
            ?
            <>

            <p>Hey there! You are logged in!</p>
            <Home/>  
            <button onClick={handleLoggedout}>Log out</button>
            </>
            :
            <>
            <form>
              <label>Email</label>
             <input type="Email" value={email} onChange={handleEmail}></input>

             <label>Password</label>
             <input type="Password" value={password} onChange={handlePassword}></input>

            <br></br>
            <button onClick={handleLoggedin}>Login</button>

                </form>
                </>}
        </div>
    )
}

export default Login