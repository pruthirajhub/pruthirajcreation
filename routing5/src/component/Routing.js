import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home  from './Home';
import Post from './Post';
import Profile from './profile';
import PostDetails from './PostDetails';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Home}/>
                <Route  exact path="/Post" component={Post}/>
                <Route path="/Post/:topic" component={PostDetails}/>
                <Route path="/Profile" component={Profile}/>
             </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;