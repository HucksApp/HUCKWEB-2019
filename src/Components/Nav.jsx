import React from 'react';


import '../Styles/Nav.css'
import s_logo from '../images/displogo.png'
import { NavLink } from 'react-router-dom'
import toastr from '../Notification/ToastNot'
 
const Nav = (props) => {
    console.log(props)
    const handleScroll =()=>{
        props.mref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            duration: "5000"
          })
    }





    return (
        <div className='nav'>
            <div className="static_logo">
                <img src={s_logo} alt=""/>
                <h2 className="s_huck">HUCKS</h2>
                <h2 className="s_app">APPS</h2>
            </div>
            <div className="real_nav">
                <p className="home"><NavLink to="/">HOME</NavLink></p>
                <p className="about"><NavLink to="/hucksapp">ABOUT</NavLink></p>
                <p className="contact" onClick={handleScroll}><NavLink to="/hucksapp">CONTACT</NavLink></p>
            </div>
        </div>
    );
}

export default Nav;
