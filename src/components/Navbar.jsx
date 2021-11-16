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
                <div className="p-2.5">
                    <Link className="w-6 md:w-7 xl:w-8" to="/profile">
                        <img className="w-6 md:w-7 xl:w-8" src={HomeImg} />
                    </Link>
                </div>
                <div className="p-2.5">
                    <Link className="w-6 md:w-7 xl:w-8" to="/blogs">
                        <img className="w-6 md:w-7 xl:w-8" src={BlogsImg} />
                    </Link>
                </div>
                <div className="p-2.5">
                    <Link className="w-6 md:w-7 xl:w-8" to="/videos">
                        <img className="w-6 md:w-7 xl:w-8" src={VideosImg} />
                    </Link>
                </div>
                <div className="p-2.5">
                    <Link className="w-6 md:w-7 xl:w-8" to="/experts">
                        <img className="w-6 md:w-7 xl:w-8" src={ExpertsImg} />
                    </Link>
                </div>
                <div className="pt-12 pb-2 px-2.5">
                    <Link className="py-12" to="/">
                        <img className="w-6 md:w-7 xl:w-8" src={LogoutImg} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
