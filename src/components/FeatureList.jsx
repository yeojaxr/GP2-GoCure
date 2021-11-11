import React from 'react'
import { Link } from "react-router-dom";

const FeatureList = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="pt-10">
                    {/* TODO: Set onClick here */}
                    {/* <Link to={`/${props.category}`}> */}
                        <div className="group cursor-pointer border-l-4 border-gray-400 hover:border-purple-900 pl-8"> 
                            <div className="text-2xl font-bold group-hover:text-purple-900">
                                {props.title}
                            </div>
                            <p className="pt-2 pb-1 group-hover:text-purple-900 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Quisque fermentum felis a neque pulvinar luctus. 
                            </p>
                        </div>
                    {/* </Link> */}
                </div>
            </a>
        </div>
    )
}

export default FeatureList
