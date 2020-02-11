import React from 'react';
import { NavLink } from 'react-router-dom'

import '../Styles/Greetings.css'
import temp from '../images/prog.png'
import HucksLogo from './HucksLogo';

import { bounceInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const Greetings = () => {

    const styles = {
                    bounceInDown:{
                        animation: 'x 1s',
                        animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
                    }
    }


    return (
        <StyleRoot>
        <div className="greetings" style={styles.bounceInDown}>
            <HucksLogo/>
            <h2 className="m1">WELCOME TO HUCKSAPP</h2>
            <h3 className="m1">I AM A FREELANCE, FULL STACK DEVELOPER</h3>
            <h3 className="m2">ALL YOUR NEEDS HAS TO BE SERVED</h3> 
            <button className="bt_abt"><NavLink to="/hucksapp">ABOUT</NavLink></button>
            <button className="bt_cont"><NavLink to="/hucksapp">CONTACT</NavLink></button>
            <img src={temp} alt="" className="dip"/>
            <div className="see">
            <p>WHAT ARE YOU DOING TO TAKE ADVANTAGE OF THE GLOBAL INFORMATION TECH. OF THE NEW ERA</p>
            <p>THE POSSIBILITIES OF THE ERA IS LIMITLESS</p>
            <p>LET YOUR TECH, DO ALL THE HARD WORK FOR YOU </p>
            <p>MOBILE AND DESKTOP SOFTWARE WHERE YOU GET TO DICTATE THE ENTIRE SOFTWARE BEHAVIOUR  </p>

            <p className="endp">  I Write Computer Codes Tailored Specifically for you,</p>
            <p className="endp ch"> As Long as your Needs is Logical,It is writeable </p>
            <p className="endp">Even Your Wants Are Taken Care Of With  Every Details Attended To </p>
            </div>
            
        </div>
    </StyleRoot>
    );
}

export default Greetings;
