import React from 'react'
import Loading from '../components/Loading'

export const LoadingPage = () => {
    return (
        <div className="bg-purple-700 h-screen">
            <div className="flex flex-col h-screen items-center justify-center">
            <Loading />
            <div className="pt-6 text-white text-lg font-medium">
                Please Wait
            </div>
            </div>
        </div>
    )
}
