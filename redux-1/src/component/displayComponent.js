import React from 'react';

const Display = (props) => {

    const renderMOVIES = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <h2>Movies</h2>
            {renderMOVIES(props)}
        </div>
    )
}
export default Display