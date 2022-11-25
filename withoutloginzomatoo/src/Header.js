import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
        <div id="icon">
          <h1 id="base"><Link to="/">zomato</Link></h1>
        </div>
        <div id="loginset">
          <button>Login
          </button>
          <button>Register</button>
        </div>
      </header>
    )
}
export default Header;