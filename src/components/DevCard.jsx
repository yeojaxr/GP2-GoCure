import React from 'react'

const DevCard = (props) => {
    return (
        <div>
            <a href={props.url}>
                <div className="bg-cover bg-center shadow-md">
                    <div className="flex h-24 md:h-40">
                        <img className="object-cover w-20 md:w-32" src={props.img} alt="" />
                        <div className="cursor-default flex items-center bg-purple-100 w-full py-4 px-4 md:px-6">
                            <div className="flex flex-col w-full">
                                <div className="text-md md:text-lg font-bold text-gray-900">
                                    {props.name}
                                </div>
                                <p className="pt-1 text-gray-900 text-xs md:text-sm">
                                    {props.campus}
                                </p>
                                <p className="pt-4 md:pt-6 text-gray-900 text-xs md:text-sm">
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

export default DevCard
