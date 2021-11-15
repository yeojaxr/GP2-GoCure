import React from 'react'


const Testimonial = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="avatar-bg bg-cover bg-center pt-72 shadow-md border border-gray-300">
                    <div className="cursor-default bg-purple-100">
                        <div className="flex items-center py-5 px-6 md:px-8">
                            <img className="h-12" src={props.img} alt="" />
                            <div className=""> 
                                <div className="text-lg font-bold text-gray-900">
                                    {props.name}
                                </div>
                                <p className="py-2 md:py-1 text-gray-900 text-sm">
                                    {props.roles}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Testimonial
