import React, { Component } from 'react';
import Card from './Cards/card';
import axios from "axios"
class Main extends Component {
constructor(props){
    super(props)
    this.state={

        product:[],

        loader:true,
        otherData:[]
    }
}

componentDidMount(){
    axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
    .then((res)=> 
    this.setState({product:res.data,loader:false,otherData:res.data}))
}

    render(){
        return ( 
            <div className="card-container ">

                {this.state.loader ? (<h1 className="head"> Loading...!</h1>):(
                       <div className="d-flex flex-wrap ">
                    { this.state.product.map((items,index)=>(  <Card {...items} key={index} /> ) 
                    )}
                    </div>
                )}
            </div>
              
             );
    }
  
}
 
export default Main;