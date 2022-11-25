import React from 'react'
 
const Footer = (props) => {
    console.log("in footer",props)
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h1>&copy;p.panda{props.year} </h1>
            </center>
        </React.Fragment>
    )
}

export default Footer;