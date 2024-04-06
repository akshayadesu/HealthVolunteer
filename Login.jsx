import React from 'react';
import { NavLink } from 'react-router-dom';
const Login = () => {

    return (
        <div>
            <div className='login'>
                <center>
                    <h1>Login page</h1>
                    <form>
                        <label>
                            Username:
                            <input type="text" className='tb'/>
                        </label>
                        <br />
                        <br />
                        <label>
                            Password:
                            <input type="password" className='tb'/>
                        </label>
                        <br />
                        <br />
                        <NavLink to='/' ><button style={{backgroundcolor:"white",width:"100px", height:"30px" }} >login</button></NavLink>
                    </form>
                </center>

            </div>

        </div>
    );
};

export default Login;