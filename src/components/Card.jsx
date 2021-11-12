import React from 'react'
import Heart from '../images/heart.svg'
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
                <img className="h-5" src={Heart} alt="" />
                <span className="pl-2 pt-1 text-gray-900 text-xs">
                    12
                </span>
                </div>
            </div>
        </Link>
    )
}

export default Card
