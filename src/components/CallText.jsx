import React from 'react'
import { Link } from 'react-router-dom';

const CallText = () => {
    return (
        <div>
            <Link to="/" className="py-4 px-0 bg-transparent rounded-md text-purple-600 text-l font-bold">
                Create account here
            </Link>
        </div>
    )
}

export default CallText
