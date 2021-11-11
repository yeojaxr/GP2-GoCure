import React from 'react'
import {Link} from "react-router-dom"

const Card = (props) => {
    return (
        <Link to={`/blogs/${props.id}`}>
            <div className="">
                <img src={props.image} alt="egg" className="object-cover h-44 w-full rounded" />
            </div>
            <div className="py-4">
                <div className="font-bold text-gray-900 text-sm mb-2">
                    {props.title}
                </div>
                <p className="pb-2 text-gray-900 text-sm">
                    {props.description}
                </p>
                <div className="flex">
                <svg className="w- h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                <span className="pl-2 pt-1 text-gray-900 text-xs">
                    12
                </span>
                </div>
            </div>
        </Link>
    )
}

export default Card
