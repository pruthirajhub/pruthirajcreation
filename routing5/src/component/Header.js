import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-inverse">
             <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand" href="#">PRUTHIRAJ PANDA</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Post">Post</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                </ul>
                </div>
             </div>
            </nav>

        </div>

    )
}
export default Header;