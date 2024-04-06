import React from 'react';
import { NavLink } from 'react-router-dom';
import myImage from './image3.jpg'
const Volunlist = () => {
    return (
        <div>
            <div className='volunlist'>
                <center>
                    <h1>list of volunteers</h1>
                    <div>
                        <div class="person-card">
                            <div class="person-info">
                                <span><img src={myImage} alt=""  style={{width:"50px",height:"50px"}}/></span>
                                <span>
                                <div>
                                <h3>Name: John Doe</h3>
                                <p>Phone: 123-456-7890</p>
                                </div>
                                </span>

                            </div>
                        </div>
                        <br />
                        <div class="person-card">
                            <div class="person-info">
                            <img src={myImage} alt=""  style={{width:"50px",height:"50px"}}/>
                                <h3>Name: Jane Smith</h3>
                                <p>Phone: 987-654-3210</p>
                            </div>
                        </div>
                        <br />
                        <div class="person-card">
                            <div class="person-info">
                            <img src={myImage} alt=""  style={{width:"50px",height:"50px"}}/>
                                <img src="image3.jpg" alt="" />
                                <h3>Name: John Doe</h3>
                                <p>Phone: 123-456-7890</p>

                            </div>
                        </div>
                        <br />
                    </div>
                    <br /><br />
                    <NavLink to="/register/seekreg/voluntlist/voluntprofile">
                        <button style={{ backgroundcolor: "white", width: "100px", height: "30px" }}>select</button>
                    </NavLink>
                </center>
            </div>
        </div>
    );
};

export default Volunlist;





