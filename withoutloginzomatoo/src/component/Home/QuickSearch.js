import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

  const url="https://zomatoajulypi.herokuapp.com/quicksearch"
  class QuickSearch extends Component{

  constructor(){
    super()

    this.state={
      mealType:''
    }
  }
  render(){
    return(
      <div id="quicksearch">
    <span id="quickheading">quick search</span>
    <span id="quicksubheading">Find Restaurants By Meal Type</span>
    <QuickDisplay mealData={this.state.mealType}/>
  </div> 
    )}

    componentDidMount(){
      fetch(url,{method:'GET'})
      .then((res)=> res.json())
      .then((data)=>{
        this.setState({mealType:data})
      })
    }
  }   
   

export default QuickSearch;