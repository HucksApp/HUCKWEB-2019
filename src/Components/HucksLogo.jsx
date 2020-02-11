import React, { Component } from 'react';

import '../Styles/Logo.css';


import img1 from '../images/gearn.png'
import img3 from '../images/gear9r.png'
import img4 from '../images/gear4r.png'
import img5 from '../images/gear6r.png'




 class HucksLogo extends Component {
  state={    
       
  }



  render() {

  


    return (
      <div className="logo">
        <div className="img">
          <img src={img1} alt="" className="gear1"/>
          <img src={img5} alt="" className="gear4"/>
          <img src={img3} alt="" className="gear2"/>
          <img src={img4} alt="" className="gear3"/>
        </div>
        <div className="leter">
          <h2 className="hucks">HUCKS</h2>
          <h2 className="appn">APPS</h2>
        </div>
       
        
        
      </div>
    )
  }
}


export default HucksLogo;