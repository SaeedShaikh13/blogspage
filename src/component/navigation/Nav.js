import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <div className='main-nav'>

        <div className='nav'>
        <a id='n1' href=''>Home</a>
        <a id='n2' href=''>About Us</a>
        <a id='n3' href=''>Services</a>
        <a id='n4' href=''>Product</a>
        <a id='n5' href=''>Portfolio</a>
       <Link to="/blogs"  id="n6">Blog </Link>
        <a id='n7' href=''>Contact Us</a>
        <img id='img1' src='https://www.infogenx.com/assets/img/seo/logo.png'></img>
        </div>

        </div>

    );
};

export default Nav;