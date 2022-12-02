import React from 'react'

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section className='login'>
            <div className="logincontainer">
                <label>Username</label>
                <input type="text" autofocus required value ={email} onChange={e=> setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value ={password} onChange={e =>setPassword(e.target.value)}
                />
                <p className="erroMsg">{passwordError}</p>
                <button className="container">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Dont have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account ?<span onClick={()=>setHasAccount(!hasAccount)}>Sign In </span></p>

                        </>
                        
                    )}
                </button>


            </div>


        </section>
    )
}

export default Login;