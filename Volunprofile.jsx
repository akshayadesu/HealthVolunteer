import React from 'react';
import myImage from './image3.jpg'
const Volunprofile = () => {
    return (
        <div>
            <div className='volunprofile'>
                <center>
                    <h1>Volunteer profile</h1>
                    <div id="details-container">
                        <img src={myImage} alt="" style={{ width: "100px", height: "100px", borderRadius:'20px' }} />
                        <h2>John Doe</h2>
                        <p>Email: john@example.com</p>
                        <p>Phone: 123-456-7890</p>
                        <p>Address: 123 Main St, Cityville</p>
                        <p>Skills: Web Development, Graphic Design</p>
                        <button id="message-button">Send Message</button>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Volunprofile;

