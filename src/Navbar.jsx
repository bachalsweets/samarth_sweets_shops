import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


export default function Navbar() {

return(<div>

<nav className="navbar navbar-expand-xlg navbar-dark bg1 fixed-top">

<h3 className="navbar-brand brandname" href="#"><img src={process.env.PUBLIC_URL + "/sweet_logo.jpg"} width="100" height="30" alt="" className="logo"/>&nbsp;समर्थ स्वीट्स</h3>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav1" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse justify-content-end text-white navbar-dark bg1" id="nav1">
    <ul className="navbar-nav p-1 mt-2 mt-lg-0 ">
      <li className="nav-item active zoom">
        <a className="nav-link" href="#welcome">मुख्यपृष्ट  </a>
      </li>
      <li className="nav-item active zoom">
        <a className="nav-link" href="#about">आमच्याविषयी </a>
      </li>
      <li className="nav-item active zoom">
        <a className="nav-link " href="#contact">आमचा संपर्क </a>
      </li>
    </ul>
    
  </div>
</nav>
    
    
    </div>




)


}