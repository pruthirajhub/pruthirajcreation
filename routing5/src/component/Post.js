import React from 'react';
import {Link} from 'react-router-dom'

const Post = () => {
    return (
        <div className="panel panel-danger">
            <div className="panel-body">
                Post
            </div>
            <div className="panel-body">
                <h1>Post</h1>
                <p>
                    Post is simple dummy text
                </p>
                <h2>Javascript</h2>
                <Link to="/post/Javascript?page=1" className="btn btn-danger">Details</Link>
                <h2>React</h2>
                <Link to="/post/React?page=2" className="btn btn-success">Details</Link>
                <h2>Node</h2>
                <Link to="/post/Node?page=3" className="btn btn-warning">Details</Link>
            </div>
        </div>

    )
}
export default Post;