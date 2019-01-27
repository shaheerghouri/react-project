import React, { Component } from 'react';

import '../assets/css/main.css'
import logo from '../assets/img/mask.png'
import github from '../assets/img/icons/github.png'

import { Link , NavLink, withRouter} from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
import '../assets/css/main.css'

const divStyle = {
  width: '88%',
  height: '800px',
  backgroundSize: 'cover'
};

class Check extends Component {

   state = {
        post: false
    }


    componentDidMount(){

       axios.get('http://localhost:3000/api/system/ping')
            .then( res => {

              

             })
            .catch(e => {
              this.setState({post:true})
                
            })
    
    }

    
  
  render() {


    const {post} = this.state;
    const postList = post ? (

          <Login/>

        ) : ( null )

    return (

       <main className="page_wrapper">
 
     <div className="hero-cover"> 

     <div className="container cover__container--16 hero-cover-img" style={{divStyle }}>
          {postList}
      </div>
   </div>
   </main>
        
         
    )




  }
}

export default Check;
