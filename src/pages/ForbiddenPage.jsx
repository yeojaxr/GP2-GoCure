import LogoImg from '../images/logo-white.svg'
import React from 'react'

const ForbiddenPage = () => {
    return (
        <div className="bg-red-700 h-screen text-white">
            <div className="flex flex-col h-screen">
                <div className="flex flex-col h-screen items-center justify-center">
                    <div className="flex gap-x-8 items-center select-none">
                        <div className="font-bold text-5xl">
                            403
                        </div>
                        <div className="text-xl font-bold">
                            Forbidden
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

export default ForbiddenPage
