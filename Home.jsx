import React from 'react';
import './Styles.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
    const navlinkstyle = ({ isActive }) => {
        return {
            color: isActive ? "red" : "green",
        }
    }

    const navigate = useNavigate();
    const logout = () => {
        navigate('/');
    }

    return (

        <div className='nav'>
            <div className='flex-container'>
                <NavLink style={navlinkstyle} to="/"><button>Home</button></NavLink>
                <NavLink style={navlinkstyle} to="register"><button>Register</button></NavLink>
                <NavLink style={navlinkstyle} to="login"><button>Login</button></NavLink>
                <NavLink to="/register/seekreg/seekerneeds">
                    <button>Select your needs</button>
                </NavLink>
                <button onClick={logout}>Logout</button>
            </div>
           
            <div className="content-container">
                <div className="text-section">
                    <h1 style={{ color: 'red' }}>HEAL TOGETHER</h1>
                    <Outlet />
                    <p>
                        The "Heal Together" is a website that helps people connect with healthcare volunteers.
                        It's easy to use and has features like logging in, registering, finding volunteers, and posting health-related needs.
                        Users can explore the site to discover volunteers, post their own needs, and connect with others.
                        The website is designed to create a supportive community where people looking for help and volunteers can easily connect and support each other.
                        Abstract:

The "Heal Together" is a web-based platform designed to facilitate connections between healthcare volunteers and individuals seeking health-related support. The platform offers a user-friendly experience, incorporating essential features such as user authentication, volunteer listings, health-related needs postings, and an intuitive matching algorithm. Users can seamlessly navigate through the Home Page, explore the Healthcare Volunteers Listing Page to find skilled volunteers, and post their health-related needs on the dedicated Health-Related Needs Posting Page. To enhance user engagement, the platform includes a Login Page for existing users and a Registration Page for newcomers. The HealthHub Connect aims to create a supportive community where care recipients and volunteers can connect, fostering a sense of unity and well-being.
                    </p>
                </div>
                <div className="image-section">
                    <img src="image1.jpg" alt="Description" />
                </div>
            </div>

            {/* <Outlet /> */}
        </div>
    );
};

export default Home;