import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogImg from "../images/profile/blog.svg"
import VideoImg from "../images/profile/video.svg"
import React, {useState} from 'react';
import { useBlog } from "../context/blog-context";
import { useVideo } from "../context/video-context";
import CardVideo from "../components/CardVideo";
import { useUser } from "../context/user-context";

const Profile = () => {
    const {user} = useUser();
    const [userName, setUserName] = useState("");

    const currentUser = user.find((u) => u.userLogged === true);
    currentUser && setUserName(currentUser.name);

    const {likesBlog} = useBlog();
    const isBlogExist = likesBlog.filter(item => item.userLikes.like === true);

    const {likesVideo} = useVideo();
    const isVideoExist = likesVideo.filter(item => item.userLikes.like === true);

    return (
        <div>
            <div className="flex justify-center gap-x-4 md:gap-x-8 px-3 sm:px-4 lg:px-40 xl:px-60 2xl:px-96 py-3"> 
                <div className="pr-10 md:pr-16 lg:pr-0 w-full">
                    <div>
                        <Header hi="Hello" name={userName} pic="tojj.jpg" />
                    </div>
                    <div className="pb-4 text-md md:text-lg font-bold">
                        Blog that you liked
                    </div>
                    <div className="pt-4 flex flex-col gap-y-5 justify-center items-center">
                        {isBlogExist.length === 0 &&
                            (<>
                                <img className="h-28 md:h-36" alt="blogs not found" src={BlogImg} />
                                <p className="text-sm md:text-mb font-semibold">Don't have liked Blog</p> 
                            </>)   
                        }
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
                    <div className="pt-6 pb-4 text-md md:text-lg font-bold">
                        Video that you liked
                    </div>
                    <div className="pt-4 flex flex-col gap-y-5 justify-center items-center">
                        {isVideoExist.length === 0 &&
                            (<>
                                <img className="h-28 md:h-36" alt="blogs not found" src={VideoImg} />
                                <p className="text-sm md:text-mb font-semibold">Don't have liked Video</p> 
                            </>)   
                        }
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
                    <div className="py-6"></div>
                </div>
            </div>
            <div className="sidebar flex items-center pr-1 md:pr-6 lg:pr-24 xl:pr-44 py-40 xl:py-64">
                <Navbar />
            </div>
        </div>
    )
}

export default Profile
