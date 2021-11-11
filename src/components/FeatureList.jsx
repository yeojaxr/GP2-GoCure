import React from 'react'

const FeatureList = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="pt-10">
                    <div className="group cursor-pointer border-l-4 border-gray-400 hover:border-pink-600 pl-8"> 
                        <div className="text-2xl font-bold">
                            {props.title}
                        </div>
                        <p className="pt-2 pb-1 text-sm">
                            {props.desc}
                        </p>
                    </div>
                </div>  
            </a>
        </div>
    )
}

export default FeatureList
