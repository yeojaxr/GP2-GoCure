import React from 'react'
import ImageOne from '../images/blogs-header.svg'

const Header = () => {
    return (
        <div className="py-8">
            <div className="h-48 bg-blue-800 rounded-md">
                <div className="h-full flex flex-wrap items-end content-end justify-between">
                    <p className="pl-6 pb-6 text-3xl text-white font-bold">
                        Blogs
                    </p>
                    <div className="flex py-6 pr-8">
                        <img className="h-36" src={ImageOne} alt="head" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
