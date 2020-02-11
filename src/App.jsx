import React from 'react';
import './App.css';


import Greetings from './Components/Greetings';
import Footer from './Components/Footer'

import ContAbt from './Components/ContAbt';
import Error4 from './Components/Error'


import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {


  return (
    <div className="App">
     < BrowserRouter>
    
       <Switch>
      <Route exact path="/" component={Greetings}/>
      
      <Route exact path="/hucksapp" component={ContAbt}/>
      <Route exact path="*" component={Error4}/>

      </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
