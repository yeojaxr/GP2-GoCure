import React from 'react';
import { Link } from 'react-router-dom';

const CallButton = () => {
    return (
        <div>
            <Link to="/" className="py-4 px-8 bg-blue-800 rounded-md text-white text-l font-bold">
                Sign in
            </Link>
        </div>
    )
}

export default CallButton
