import React from 'react';
import { NavLink } from 'react-router-dom';

const Seekerneeds = () => {
    return (
        <div>
            <div className='seekerneeds'>
            <center>
            <h1>Select your needs</h1>
            <select  className="dropdown" name="" id="" style={{width:"300px",height:"50px"}}>
                <option value="1">Physical Therapy</option>
                <option value="2">Nursing</option>
                <option value="3">Emotional support</option>
                <option value="4">Home Health Care</option>
                <option value="5">Counseling</option>
            </select>
            <br />
            <br />
            <NavLink to="/register/seekreg/voluntlist">
                <button style={{backgroundcolor:"white",width:"100px", height:"30px" }}>select</button>
            </NavLink>
            </center>
            </div>
        </div>
    );
};

export default Seekerneeds;





