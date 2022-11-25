import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url="https://developerjwt.herokuapp.com/api/auth/userinfo"

class Profile extends Component{
    constructor(props){
        super(props)

        this.state={
            user:''
        }
    }

    handelLogout = () => {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('rtk');
        this.props.history.push('/ ')
    }
    conditionalRender = ()=> {
        if(this.state.user.role){
            if(this.state.user.role === "Admin"){
                return(
                    <Link to="/users" className="btnn btnn-success">
                        Users
                    </Link>
                )
            }
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')===null){
            this.props.history.push('/ ')
        }
        sessionStorage.setItem('rtk',this.state.user.role);
        return(
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hii {this.state.user.name}</h1>
                        <h2>Your Email Id is {this.state.user.email}</h2>
                        <h2>Your Phone No is {this.state.user.phone}</h2>
                        <h2>Your Roll is {this.state.user.role}</h2>
                        {this.conditionalRender()} &nbsp;
                        <button className="btn btn-danger" onClick={this.handelLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
 
    //on page load 
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res)=> res.json())
        .then((data) => { 
            this.setState({
                user:data
            })
        })
    }


}

export default Profile;