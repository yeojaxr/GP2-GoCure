import React from 'react'

const Header = (props) => {
    return (
        <div className="py-8">
            <a href={props.url}>
                <div className=" bg-purple-700 rounded-md">
                    <div className="h-full flex flex-wrap items-end content-end justify-between">
                        <p className="pl-6 pb-6 text-3xl text-white font-bold">
                            {props.name}
                        </p>
                        <img src={props.pic} alt="head" className="object-cover h-52 w-1/3" />
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Header
