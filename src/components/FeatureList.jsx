import React from 'react'
import { Link } from "react-router-dom";

const FeatureList = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="pt-10">
                    {/* TODO: Set onClick here */}
                    <Link to={`/${props.category}`}>
                        <div className="border-l-4 border-gray-400 pl-8"> 
                            <div className="text-xl font-bold text-gray-900">
                                {props.title}
                            </div>
                            <p className="py-1 text-gray-900 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Quisque fermentum felis a neque pulvinar luctus. 
                            </p>
                        </div>
                    </Link>
                </div>
            </a>
        </div>
    )
}

export default FeatureList
