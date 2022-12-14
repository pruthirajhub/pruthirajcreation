import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './ListingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class Listing extends Component{

    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    setDataPerFilter = (data) =>{
        this.setState({restaurantList:data})
    }

    render(){
        return(
           <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center><h2><u>Filters</u></h2></center>
                            <CuisineFilter mealId={this.props.match.params.mealId} restPerCuisine={(data)=>{this.setDataPerFilter(data)}}/>
                            <CostFilter mealId={this.props.match.params.mealId} restPerCost={(data)=>{this.setDataPerFilter(data)}}/>
                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>  

           </>
        )
    }
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId)
        axios.get(`${url}${mealId}`)
        .then((res)=>this.setState({restaurantList:res.data}))
    }
}
export default Listing;