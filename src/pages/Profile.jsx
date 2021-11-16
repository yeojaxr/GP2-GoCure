import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogImg from "../images/profile/blog.svg"
import VideoImg from "../images/profile/video.svg"
import React from 'react';
import { useBlog } from "../context/blog-context";
import { useVideo } from "../context/video-context";
import CardVideo from "../components/CardVideo";

const Profile = () => {
    const {likesBlog} = useBlog();
    const isBlogExist = likesBlog.filter(item => item.userLikes.like === true);
    console.log(isBlogExist);

    const {likesVideo} = useVideo();
    const isVideoExist = likesVideo.filter(item => item.userLikes.like === true);

    return (
        <div>
            <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="w-full">
                    <div>
                        <Header hi="Hello" name="Toji Fushiguro" pic="tojj.jpg" />
                    </div>
                    <div className="pb-4 text-lg font-bold">
                        Blog that you liked
                    </div>
                    <div className="pt-4 flex flex-col gap-y-5 justify-center items-center">
                        <img className="h-36" src={BlogImg} />
                        <p className="font-semibold">Don't have liked Blog</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-4">
                    {isBlogExist &&
                        isBlogExist.map((art) => (
                            <Card
                            key={art.userLikes.id}
                            title={art.userLikes.title}
                            image={art.userLikes.image}
                            id={art.userLikes.id}
                            category="blogs"
                            />
                        ))}
                    </div>
                    <div className="pt-6 pb-4 text-lg font-bold">
                        Video that you liked
                    </div>
                    <div className="pt-4 flex flex-col gap-y-5 justify-center items-center">
                        <img className="h-36" src={VideoImg} />
                        <p className="font-semibold">Don't have liked Video</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-4">
                    {isVideoExist &&
                        isVideoExist.map((vid) => (
                            <CardVideo
                                key={vid.userLikes.id}
                                title={vid.userLikes.title}
                                image={vid.userLikes.image}
                                id={vid.userLikes.id}
                                category="videos"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="sidebar flex items-center pr-4 md:pr-6 lg:pr-24 xl:pr-44 py-40 xl:py-64">
                <Navbar />
            </div>
        </div>
    )
}

export default Profile
