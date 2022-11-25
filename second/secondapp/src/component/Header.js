import React from 'react';
 import './Header.css';

class Header extends React.Component{

    constructor() {
        super()
         this.state={
            title:'React Application',
            keyword:'User Text Here'
            }
    }

    handlechange = (event) => {
      // console.log(event.target.value)
      this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
      this.props.userInput(event.target.value)
    }

  render () { 
    //  console.log("inside render")
    return(
        <React.Fragment>
            <header >
                <div className="logo" >{this.state.title}</div>
                <input onChange={this.handlechange}/>

                <div style={{color:'white',fontSize:'17px'}} >{this.state.keyword}</div>
            </header>
            <hr/>
        </React.Fragment>  
    )
  }
}




export default Header;


