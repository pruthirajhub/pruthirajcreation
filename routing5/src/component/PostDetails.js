import React from 'react';


const PostDetails = (props) => {
    console.log(props)
    console.log(props.match.params.topic)
    console.log(props.location.search.split('=')[1])
    return (
        <div className="panel panel-waring">
            <div className="panel-body">
            {props.match.params.topic}Details
            </div>
            <div className="panel-body">
                <h1>{props.match.params.topic} Details</h1>
                <p>
                    {props.match.params.topic}Details is simple dummy text
                </p>
                <h3>You are on page number {props.location.search.split('=')[1]}</h3>
            </div>
        </div>
    )
}
export default PostDetails;