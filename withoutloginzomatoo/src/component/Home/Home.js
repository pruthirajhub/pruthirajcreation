import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';



const Home = (props) => {
    console.log(">>>props i home>>>",props)
    return(
       <div>
        <Search/>
        <QuickSearch/> 
       </div>
    )
}
export default Home;