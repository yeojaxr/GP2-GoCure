import React from 'react'
import ImageOne from '../images/food-1.jpg'

const FeatureCard = () => {
    return (
        <div>
            <div className="">
                <img src={ImageOne} alt="egg" className="h-20 md:h-60 lg:h-96 rounded" />
            </div>
            <div className="py-4">
                <div className="font-bold text-gray-900 text-3xl mb-2">
                    Blogs
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
