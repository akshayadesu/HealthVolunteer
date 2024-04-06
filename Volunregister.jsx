// import React from 'react';

// const Volunregister = () => {
//     return (
//         <div>
//             <h1>volunteer regist</h1>
//         </div>
//     );
// };

// export default Volunregister;



import React from 'react';
import { NavLink } from 'react-router-dom';

const Volunregister = () => {
    return (
        <div>
            <center>
                <div className='volunreg'>
                    <h1>Volunteer Registration Form</h1>
                    <div className="container">
                        <form action="#" className="form">
                            <div className="input-box">
                                <label>Full Name</label>
                                <input type="text" style={{borderRadius:"10px",width:"200px",height:"30px"}} placeholder="Enter full name" required />
                            </div>
                            <br />
                            <div className="input-box">
                                <label>Email Address</label>
                                <input type="text" style={{borderRadius:"10px",width:"200px",height:"30px"}} placeholder="Enter email address" required />
                            </div>
                            <br />

                            <div className="column">
                                <div className="input-box">
                                    <label>Phone Number</label>
                                    <input type="phone" style={{borderRadius:"10px",width:"200px",height:"30px"}} placeholder="Enter phone number" required />
                                </div>
                            </div>
                            <br />

                            <div className="input-box address">
                                <label>Address</label>
                                <textarea style={{borderRadius:"10px",width:"200px",height:"60px"}} placeholder="Enter your address" required />
                            </div>
                            <br />
                            <div className="input-box address">
                                <label>Skills</label>
                                <textarea  style={{borderRadius:"10px",width:"200px",height:"60px"}}placeholder="Enter your skills" required />
                            </div>
                            <br />
                            {/* <button type="submit">Submit</button> */}
                            <NavLink to='/' ><button style={{backgroundcolor:"white",width:"100px", height:"30px" }} >Submit</button></NavLink>
                        </form>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Volunregister;