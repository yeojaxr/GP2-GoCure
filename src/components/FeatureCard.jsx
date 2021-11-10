import React from 'react'

const FeatureCard = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="">
                    <img src={props.pic} alt="egg" className="h-20 md:h-60 lg:h-80 rounded object-cover" />
                </div>
                <div className="py-4">
                    <div className="font-bold text-gray-900 text-2xl mb-2">
                        {props.title}
                    </div>
                    <p className="pb-2 text-gray-900 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque fermentum felis a neque pulvinar luctus. 
                    </p>
                </div>     
            </a>      
        </div>
    )
}

export default FeatureCard
