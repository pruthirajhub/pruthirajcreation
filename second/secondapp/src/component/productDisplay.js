import React from 'react';
import './product.css'

const Product = (props) => {
    console.log(">>>>",props)

    const renderProduct = props.prodData.map((item,index) =>{
        return(
            <div id="card" key={index}>
                <img src= {item.img} alt={item.name}/>
                <div>
                    <h3>{item.name}</h3>
                    <p> {item.description}</p>
                    <p>Rs.{item.cost}</p>
                    <p>{item.uses}</p>
                </div>
                
            </div>
        )
    })

    return(
        <div id="main">
           {renderProduct}
        </div>
    )

}
export default Product;