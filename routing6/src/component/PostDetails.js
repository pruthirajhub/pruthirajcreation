import React from 'react';
import {useParams, useSearchParams} from 'react-router-dom';

const PostDetails = (props) => {
    let params= useParams()
    let [SearchParams] = useSearchParams()
    return (
        <div className="panel panel-waring">
            <div className="panel-body">
            {params.topic}Details
            </div>
            <div className="panel-body">
                <h1>{params.topic} Details</h1>
                <p>
                    {params.topic}Details is simple dummy text
                </p>
                <h3>You are on page number {SearchParams.getAll('page')}</h3>
            </div>
        </div>
    )
}
export default PostDetails;