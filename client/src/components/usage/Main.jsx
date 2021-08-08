import React, { useEffect, useState } from 'react';
import  {Router,Link} from '@reach/router';
import Create from './Forms/Create';
import ShowAll from '../view/ShowAll';
import ShowOne from '../view/ShowOne';
import { navigate } from '@reach/router';
import { auth } from '../../firebase'
import './style.css'

const Main = () => {
  const sighnOut = ()=>{
  auth.signOut()
  navigate('/')
}
////////////////////////////////////////////////

  return(
    <div className="style" >

    <h1>Main</h1>
      <center>
        <Link to = "/home" style={{textDecoration: "none", color:"yellow"}}> Home </Link> |
        <Link to = "/add" style={{textDecoration: "none", color:"yellow"}}> Create </Link> |
        <Link to = "/show" style={{textDecoration: "none", color:"yellow"}}> Show </Link>|
        <p><button onClick={() => sighnOut()}>Sign out</button></p>
       </center>
        <Router>
           <Create path="/add" />
           <ShowAll path="/show" />
           <ShowOne path="/show/:id" />
        </Router>
      </div>
    );
};
export default Main;
