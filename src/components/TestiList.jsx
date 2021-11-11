import React from 'react'

const TestiList = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="pt-8">
                    <div className="cursor-pointer bg-purple-100 shadow-md hover:bg-pink-600 text-gray-900 hover:text-white">
                        <div className="flex items-center py-4 px-8">
                            <img className="h-12" src={props.img} alt="" />
                            <div className="pl-8"> 
                                <div className="text-lg font-bold">
                                    {props.name}
                                </div>
                                <p className="py-1 text-sm">
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

export default TestiList
