import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div id='main'>
            <Navbar/>
            <div className="name">
                <h1><span>Lanuch Your App</span> With Confidence and Createvity</h1>
                <p className='details'>Lorem ipsum, dolor site illo maxime neque ducimus Ea, aliquid nulla!</p>
                <a href="#" className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header;
