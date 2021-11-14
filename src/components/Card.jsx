import React from 'react'
import Heart from '../images/heart.svg'
import {Link} from "react-router-dom"

const Card = (props) => {
    return (
        <Link to={`/${props.category}/${props.id}`}>
            <div className="text-gray-900">
                <div className="">
                    <img src={props.image} alt="picture" className="object-cover object-right h-44 w-full" />
                </div>
                <div className="px-2 py-3 md:py-4">
                    <div className="font-bold  text-sm mb-2">
                        {props.title}
                    </div>
                    <p className="pb-1 md:pb-2 text-sm">
                        {props.description}
                    </p>
                    <div className="flex">
                    <img className="h-5" src={Heart} alt="" />
                    <span className="pl-2 pt-1 text-xs">
                        12
                    </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
