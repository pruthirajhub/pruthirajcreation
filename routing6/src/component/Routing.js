import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home  from './Home';
import Post from './Post';
import Profile from './profile';
import PostDetails from './PostDetails';
import Main from './Main'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
             <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route  exact path="Post" element={<Post/>}/>
                    <Route path="Post/:topic" element={<PostDetails/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                </Route>
             </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;