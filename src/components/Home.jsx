import React from 'react';
import { Link } from 'react-router-dom';
import Karolina from '../images/Karolina.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="content-container">
            <div className="text-container">
                <h2>
                    <span style={{ color: 'black' }}>PAYMENT IN</span>
                    <br />
                    <span style={{ color: '#f05142' }}>PROGRESS</span>
                </h2>
                <p>You can still earn Plume Miles while inflight. Keep an eye<br /> on the Duty Free Area for upcoming giveaways!</p>
                <div className="button-container">
                    <Link to="/register">
                        <button className='register'>Register</button>
                    </Link>
                    <Link to="/login">
                        <button className='login'>Login</button>
                    </Link>
                </div>
            </div>
            <div className="image-container">
                <img src={Karolina} alt="Karolina"  />
            </div>
        </div>
    );
};

export default Home;
