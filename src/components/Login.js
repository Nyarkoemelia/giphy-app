import React,{useState} from 'react'
import {useHistory} from "react-router-dom";
import { Form,  Button } from "react-bootstrap";



function Login() {

    let history=useHistory()
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
        history.push("/home")
    }

    const handleLoggedout=(event)=>{
        setLoggedin(false)
    }

    return (

        <div>
        
            {loggedin
            ?
            <>
            <div className="welcome">
            <h2>Hey there! You are logged in!</h2>
            </div>
           
            <></>
            <Button onClick={handleLoggedout}>Log out</Button>
            </>
            :
            <>
            <div style={{marginTop: "30px"}} className="login">
            <Form>
              <label>Email</label>
             <input type="Email" value={email} onChange={handleEmail}></input>

             <label>Password</label>
             <input type="Password" value={password} onChange={handlePassword}></input>

            <br></br>
            <Button onClick={handleLoggedin}>Login</Button>

                </Form>
                </div>
                </>}
        </div>
    )
}

export default Login