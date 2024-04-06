import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    return (
        <div>
            <div style={{ backgroundColor: "white"}}>
                <center>
                    <form action="" className='regpage'>

                        <h1>Registration page</h1>
                        <NavLink to="/register/volreg">
                            <button className="button" style={{ backgroundColor: 'white' }}>Register as volunteer</button>
                        </NavLink>
                        <br /><br />
                        <NavLink to="/register/seekreg">
                            <button className="button" style={{ backgroundColor: 'white' }}>Register as seeker</button>
                        </NavLink>

                    </form>
                </center>

            </div>
        </div>
    );
};

export default Register;