// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Seekerreg = () => {

//     return (
//         <div>
//             <h1>seeker registration</h1>
//             <NavLink to="/login">
//                 <button>register</button>
//             </NavLink>

//         </div>
//     );
// };

// export default Seekerreg;



import React from 'react';
import { NavLink } from 'react-router-dom';

const Seekerreg = () => {
    return (
        <div>
            <center>
            <div className="seek-container">
            <h1>Seeker Registration Form</h1>
                <form action="#" className="form">
                    <div className="input-box">
                        <label>Full Name</label>
                        <input type="text" style={{borderRadius:"10px",width:"200px",height:"30px"}}placeholder="Enter full name" required />
                    </div>

                    <div className="input-box">
                        <label>Email Address</label>
                        <input type="text" style={{borderRadius:"10px",width:"200px",height:"30px"}} placeholder="Enter email address" required />
                    </div>

                    <div className="column">
                        <div className="input-box">
                            <label>Phone Number</label>
                            <input type="number" style={{borderRadius:"10px",width:"200px",height:"30px"}} placeholder="Enter phone number" required />
                        </div>
                    </div>


                    <div className="input-box address">
                        <label>Address</label>
                        <textarea style={{borderRadius:"10px",width:"200px",height:"60px"}}placeholder="Enter your address" required />
                    </div>

                    <NavLink to="/login">
                        <button style={{backgroundcolor:"white",width:"100px", height:"30px" }}>Register</button>
                    </NavLink>
                </form>
            </div>
            </center>
        </div>
    );
};

export default Seekerreg;