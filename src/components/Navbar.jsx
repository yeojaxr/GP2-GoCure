import React from 'react'
import HomeImg from '../images/navbar/home.svg'
import BlogsImg from '../images/navbar/blogs.svg'
import VideosImg from '../images/navbar/videos.svg'
import ExpertsImg from '../images/navbar/experts.svg'
import LogoutImg from '../images/navbar/logout.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center">
                <Link className="pt-12 pb-2" to="/">
                    <img className="h-10" src={HomeImg} alt="" />
                </Link>
                <Link className="py-2" to="/">
                    <img className="h-10" src={BlogsImg} alt="" />
                </Link>
                <Link className="py-2" to="/">
                    <img className="h-10" src={VideosImg} alt="" />
                </Link>
                <Link className="py-2" to="/">
                    <img className="h-10" src={ExpertsImg} alt="" />
                </Link>

                <Link className="py-12" to="/">
                    <img className="h-10" src={LogoutImg} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
