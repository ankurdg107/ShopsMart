import React, {useState} from "react"
import "./register.css"
import axios from "axios"
import {useHistory} from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user,setUser] = useState ({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email,password,reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9000/register", user)
            .then(res => {
                alert(res.data.message)
                history.push("/login")
            })
        }else{
            alert("Invalid Input")
        } 
    }



    // const googleAuth = () => {
    //     window.open(
    //         `${process.env.REACT_APP_API_URI}/auth/google/callback`,
    //         "_self"
    //     );
    // };





    return (
        <div className="register"> 
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange ={handleChange}></input><br></br>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange ={handleChange}></input><br></br>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange ={handleChange}></input><br></br>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange ={handleChange}></input><br></br>
            <button onClick={register}>Register</button> <br></br>
            or<br></br>
            <button onClick={() => history.push("/login")}>Login</button> <br></br>

            {/* or<br></br> */}

            {/* <button className={styles.google_btn} onClick={googleAuth}>
                <span>Sign up with Google</span>
            </button> */}
        </div>
    )
}

export default Register






