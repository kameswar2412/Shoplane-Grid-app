import React, { Component } from 'react';

import './App.css';
// importing header,main,footer
import Header from './Details page/Header/header';  //class base component
import Main from './Details page/Main/main';       //class base component
import Footer from './Details page/Footer/footer';  //function base component


class App extends Component  {
  render(){
    return ( 
      <div>
        <Header />
  
        <Main />
  
        <Footer />
      </div>
     );
  }
 
}
 
export default App;
