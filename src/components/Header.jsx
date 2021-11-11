import React from 'react'

const Header = (props) => {
    return (
        <div className="pt-8 pb-6 md:pb-8">
            <a href={props.url}>
                <div className="bg-purple-700 rounded-md py-3">
                    <div className="h-full flex flex-wrap items-end content-end justify-between">
                        <div className="flex flex-col pl-6 pb-6">
                        <p className="text-xl text-white pb-1">
                            {props.hi}
                        </p>
                        <p className="text-3xl text-white font-bold">
                            {props.name}
                        </p>
                        </div>
                        <img src={props.pic} alt="head" className="object-cover h-max md:h-52 w-1/3" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Header
