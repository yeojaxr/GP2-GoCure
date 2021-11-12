import React from 'react'
import BlogsImg from '../images/navbar/blogs.svg'
import VideosImg from '../images/navbar/videos.svg'
import ExpertsImg from '../images/navbar/experts.svg'
import ProfileImg from '../images/home/avatar-toji.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="">
            <div className="flex flex-col items-center">
                <Link className="pt-12 pb-4" to="/blogs">
                    <img src={BlogsImg} alt="" />
                </Link>
                <Link className="py-4" to="/videos">
                    <img src={VideosImg} alt="" />
                </Link>
                <Link className="py-4" to="/experts">
                    <img src={ExpertsImg} alt="" />
                </Link>

                <Link className="py-12" to="/">
                    <img className="w-20 md:w-12" src={ProfileImg} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
