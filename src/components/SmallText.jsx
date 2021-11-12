import React from 'react'
import { Link } from 'react-router-dom';

const SmallText = (props) => {
    return (
        <div className="py-2.5">
            <Link to={{pathname: props.url}} className="py-2.5 px-5 bg-transparent rounded-md text-purple-600 hover:text-pink-600 text-sm font-bold">
                {props.title}
            </Link>  
        </div>
    )
}

export default SmallText
