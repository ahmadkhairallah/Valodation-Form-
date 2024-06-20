import { useState } from 'react';
import './Login.scss'

function Login() {
    const [state , setState] = useState({email: "null", password: " null"});
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handlechange = (e) => {
        e.persist();
        setState((prev) => {
            return {...prev, [e.target.name]: e.target.value};
        });
        if (e.target.name === "email") {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            setIsEmailValid(emailRegex.test(e.target.value));
        } else (e.target.value.length < 6) ? setIsPasswordValid(false) : setIsPasswordValid(true);
      
    }
    const chickDisable = () => {
        if (isEmailValid && isPasswordValid) {
            return false
        } else {
            return true
        }
    }
    return (
        <>
            <div className="container"></div>
                <div className="login">
                    <h1>Login</h1>
                    <div className="form">
                        <div className="input-field">
                            <input type="text" placeholder="Email" name="email" onChange={handlechange} />
                            {!isEmailValid ? <p className="error">Email is not valid</p> : null} 
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" name="password" onChange={handlechange} />
                            {!isPasswordValid ? <p className="error">Password is not valid</p> : null}
                        </div>
                      
                        </div>
                        <div className="btn">
                            <button disabled={chickDisable()} type="submit">Login</button>
                        </div>
                        <div className="forget">
                            <a href="#">Forget Password?</a>
                        </div>
                    </div>
            
        </>
    )

}
export default Login;
