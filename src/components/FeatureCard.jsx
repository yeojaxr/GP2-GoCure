import React from 'react'
import ImageOne from '../images/food-1.jpg'
import { useState } from 'react'

const FeatureCard = (props) => {
    return (
        <div>
            <div className="">
                <img src={ImageOne} alt="egg" className="h-20 md:h-60 lg:h-80 rounded object-cover" />
            </div>
            <div className="py-4">
                <div className="font-bold text-gray-900 text-3xl mb-2">
                    {props.title}
                </div>
                <p className="pb-2 text-gray-900 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque fermentum felis a neque pulvinar luctus. 
                </p>
            </div>           
        </div>
    )
}

export default FeatureCard
