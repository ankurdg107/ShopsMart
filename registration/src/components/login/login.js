import React,{useState} from "react"
import "./login.css"
import axios from "axios"
import {useHistory} from "react-router-dom"
import { GoogleLoginButton } from "react-social-login-buttons"
import { LoginSocialGoogle } from "reactjs-social-login"

const Login = ({setLoginUser}) => {

    const history = useHistory()

    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post ("http://localhost:9000/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.usermail)
            history.push("/homepage")
        })
    }




    
    // const googleAuth = () => {
    //     window.open(
    //         `${process.env.REACT_APP_API_URI}/auth/google/callback`,
    //         "_self"
    //     );
    // };





    // const handleGoogleResponse = (response) => {
    //     const token = response.accessToken;
    //     axios
    //       .post("http://localhost:9000/googlelogin", { token })
    //       .then((res) => {
    //         alert(res.data.message);
    //         setLoginUser(res.data.usermail);
    //         history.push("/");
    //       });
    //   };




    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input><br></br>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input><br></br>
            <button onClick={login}>Login</button> <br></br>
            or<br></br>
            <button onClick={() => history.push("/register")}>Register</button> <br></br>
            or<br></br>

            {/* <button className={styles.google_btn} onClick={googleAuth}>
                <span>Sign in with Google</span>
            </button> */}


            {/* <LoginSocialGoogle
        client_id={"591998438883-r4sht8gd6j5883uu4rqn47cqf6evsqn4.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={handleGoogleResponse}
        onReject={(err) => {
            console.log(err);
          }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle> */}




      <LoginSocialGoogle
        client_id={"591998438883-r4sht8gd6j5883uu4rqn47cqf6evsqn4.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
        </div> 
    )
}

export default Login