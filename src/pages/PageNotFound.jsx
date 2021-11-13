import LogoImg from '../images/logo-white.svg'
import React from 'react'

const PageNotFound = () => {
    return (
        <div className="bg-purple-700 h-screen text-white">
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen items-center justify-center">
                    <div className="flex gap-x-8 items-center select-none">
                        <div className="font-bold text-5xl">
                            404
                        </div>
                        <div className="text-xl font-bold">
                            Not Found
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-9">
                        <img className="h-8" src={LogoImg} alt="" />   
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
