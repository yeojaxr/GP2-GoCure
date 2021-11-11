import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <a href={props.url}>
                <div className="pt-10">
                    <div className="pl-8"> 
                        <div className="text-xl font-bold text-gray-900">
                            {props.name}
                        </div>
                        <p className="py-1 text-gray-900 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque fermentum felis a neque pulvinar luctus. 
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Testimonial
