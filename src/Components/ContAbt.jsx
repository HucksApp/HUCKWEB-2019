import React, { Component } from 'react';

import '../Styles/Cont.css'

import Ahrabprince from '../images/avartar.jpg'
import { bounceInRight } from 'react-animations'
import Radium,  { StyleRoot } from 'radium'

import Nav from './Nav'
import ContForm   from './ContForm'

import imge1 from '../images/icons8-python-50.png'
import imge2 from '../images/icons8-react-50.png'
import imge3 from '../images/icons8-javascript-50.png'
import imge4 from '../images/icons8-angularjs-50.png'
import imge5 from '../images/icons8-sql-50.png'










class ContAbt extends Component {

   constructor(props) {
        super(props);
        this.contact= React.createRef();
        this.up = React.createRef();
  }
  


render(){
    const styles = {
        bounceInRight: {
                animation: 'x 1s',
                animationName: Radium.keyframes(bounceInRight,'bounceInRight')
        }
    };


    const SContForm = React.forwardRef((props, ref)=>{
      return (<ContForm nref={this.up}  {...props} />)
    });
    


    const DContForm = React.forwardRef((props )=>{
        return (< Nav  mref={this.contact}  {...props}     />)
      });


    
    return (
        <StyleRoot style={styles.bounceInRight}>
        <div className='cont_abt' id="top" ref={this.up}>
        <DContForm /> 
            <h1>ABIODUN MOHAMMAD AREMU</h1>
            <div className="about" >
                <img className="ahrab" src={Ahrabprince} alt=""/>
                <div className="bio">
                    <div className="l1">
                        <h3 className="titl">Database Administration</h3>
                        <p><span className="dbn">Non Relational Database: </span><span> Firebase/Firestore, mongodb</span></p>
                        <p><span className="dbn">Relational Database: </span><span> MYSQL, PSQL </span></p>
                    </div>
                    <div className="mid">
                    <div className="l2">
                        <h3 className="titl">Backend</h3>
                        <p className="bl1"><span> Python</span><img className='posteric' src={imge1} alt=""/></p>
                        <p className="bl2">JS<img className='posteric' src={imge3} alt=""/></p>
                        <p className="bl3">SQL<img className='posteric' src={imge5} alt=""/></p>
                    </div>
                    <div className="l3">
                        <h3 className="titl">Frontend</h3>
                        <p className="hc">HTML5/CSS3</p>
                        <p className="rl"><span className="rls">React</span><img className='posteric' src={imge2} alt=""/></p>
                        <p className="al"><span className="als">Angular</span><img  className='posteric' src={imge4} alt=""/></p>
                        
                    </div>
                    </div>
                    <div className="others" ref={this.contact} > 
                        <span><h3 className="oth">Authentication</h3><p>Firebase, Google-OAUTH, JWT </p></span>
                        <span><h3 className="oth">Version Control</h3><p>Git</p></span>
                    </div>
                </div>
            </div>
            < SContForm  />
           
        </div>
        </StyleRoot>
    );
}
}
export default ContAbt;
