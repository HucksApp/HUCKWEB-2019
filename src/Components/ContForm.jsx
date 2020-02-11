import React, { Component } from 'react'
import toastr from '../Notification/ToastNot'


import {withRouter} from 'react-router-dom'
import Mailer from '../WebHandlers/Mailer'

import '../Styles/Form.css'
import '../Styles/Ant.css'



 class ContForm extends Component {



    state= {
      data : {
              name: "",
              email: "",
              message: ""
      }
    }


handleChange = (e)=>{

const dataCopy = {...this.state.data};
dataCopy[e.target.id] = e.target.value;
  this.setState({
        data: dataCopy
  })
console.log(this.state.data)
}    

handleSubmit = (e)=>{
  e.preventDefault();

 
 Mailer(this);
    toastr.success("YOUR MAIL HAS BEEN SENT ");
    toastr.success("I WOULD GET BACK TO YOU AS SOON AS POSSIBLE ");

 const dataCopy = {...this.state.data};
 dataCopy.name= "";
 dataCopy.email= "";
 dataCopy.message= "";

 this.setState({
    data: dataCopy
 })


}

handleScroll=()=>{

this.props.nref.current.scrollIntoView({
  behavior: "smooth",
  block: "start",
  duration: "5000"
})

};



  render() {
    return (
      <div className="form">
          <h2 className="cont_h">
            FOR PROJECTS OR ENQUIRES,
            CONTACT ME
          </h2>
          <form onSubmit={this.handleSubmit} className="formb" ref={this.props.my}>
              <div className="li">
                <label htmlFor="name">
                    NAME:
                </label>
                <input type="text" onChange={this.handleChange}  value={this.state.data.name} placeholder="PLEASE ENTER YOUR NAME"  id="name"/>
              </div>
              <div className="li">
                <label htmlFor="email">
                    EMAIL:
                </label>
                <input type="text" onChange={this.handleChange} value={this.state.data.email} placeholder="PLEASE ENTER YOUR NAME"  id="email"/>
              </div>
              <div className="lia">
                <label htmlFor="message">
                    MESSAGE:
                </label>
                <textarea id="message" cols="30" value={this.state.data.message} onChange={this.handleChange} rows="10"></textarea>
              </div>
              <button type="submit" >SUBMIT</button>
          </form>
          <div onClick={this.handleScroll} className="ant" >
              <div className="tic">UP</div>
          </div>
        
      </div>
    )
  }
}

export default withRouter(ContForm);
