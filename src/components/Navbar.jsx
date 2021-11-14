import React from 'react'
import HomeImg from '../images/navbar/home.svg'
import BlogsImg from '../images/navbar/blogs.svg'
import VideosImg from '../images/navbar/videos.svg'
import ExpertsImg from '../images/navbar/experts.svg'
import LogoutImg from '../images/navbar/logout.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Link className="pt-12 pb-3" to="/profile">
                    <img className="w-6 md:w-7 xl:w-8" src={HomeImg} />
                </Link>
                <Link className="py-3" to="/blogs">
                    <img className="w-6 md:w-7 xl:w-8" src={BlogsImg} />
                </Link>
                <Link className="py-3" to="/videos">
                    <img className="w-6 md:w-7 xl:w-8" src={VideosImg} />
                </Link>
                <Link className="py-3" to="/experts">
                    <img className="w-6 md:w-7 xl:w-8" src={ExpertsImg} />
                </Link>

                <Link className="py-12" to="/">
                    <img className="w-6 md:w-7 xl:w-8" src={LogoutImg} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
