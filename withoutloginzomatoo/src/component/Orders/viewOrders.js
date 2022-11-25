import React,{Component} from 'react';
import axios from 'axios';
import Display from './displayOrders';

const placeOrder = "http://localhost:7601/orders";;


class ViewOrder extends Component {

    constructor(props){
        super()

        this.state={
            order:''
        }
    }

    render(){
        return(
           <>
            <Display orderData={this.state.order}/> 
           </>
        )
    }
    componentDidMount(){
        axios.get(placeOrder).then((res) => {this.setState({order:res.data})})
    }
}

export default ViewOrder;