import React from 'react'

const Loading = () => {
    let circleCommonClasses = 'h-6 w-6 bg-white rounded-full';

    return (
        <div className='flex'>
            <div className={`${circleCommonClasses} mr-4 animate-bounce`}></div>
            <div className={`${circleCommonClasses} mr-4 animate-bounce200`}></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    )
}

export default Loading
