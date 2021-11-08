import React from 'react'
import { Link } from 'react-router-dom';

const CallText = () => {
    return (
        <div>
            <Link to="/" className="py-4 px-8 bg-transparent rounded-md text-blue-800 text-xl font-bold">
                Create account here
            </Link>
        </div>
    )
}

export default CallText
