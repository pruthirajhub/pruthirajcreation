import React from 'react';
import './QuickSearch.css';
import { Link } from 'react-router-dom'

const QuickDisplay = (props) =>{
    
    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) =>{
                return(
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                        <div className="tilecontainer">
                            <div className="tilecontainer1">
                                <img src={item.meal_image} alt={item.mealtype}/>
                            </div>
                            <div className="tilecontainer2">
                                <div className="componentheading">{item.mealtype}</div>
                                <div className="componentsubheading">Start Your Day With Exclusive Breakfast Option </div>
                            </div>
                        </div>
                    </Link>
            
                )
            } )
        }

    } 


    return(    
            <div id="cardmain">
               {listMeal(props)}
            </div>
        

    )
}
export default QuickDisplay;