import React from 'react'
import { Link } from 'react-router-dom';

const SmallText = (props) => {
    return (
        <div>
            <a href={props.url}>
                <Link to="/" className="py-2.5 px-5 bg-transparent rounded-md text-purple-600 hover:text-pink-600 text-l font-bold">
                    {props.title}
                </Link>  
            </a>
        </div>
    )
}

export default SmallText
