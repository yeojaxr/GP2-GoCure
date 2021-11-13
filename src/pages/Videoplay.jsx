import Card from "../components/Card";
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

const Videoplay = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [selectedVideo, _setVideos] = useState([]);

    const [otherVideo1, setOtherVideo1] = useState([]);
    const [otherVideo2, setOtherVideo2] = useState([]);
    const [otherVideo3, setOtherVideo3] = useState([]);

    function getRandomWithOneExclusion(lengthOfArray,indexToExclude){
        let rand = null;  //an integer

        while(rand === null || rand === indexToExclude){
            rand = Math.round(Math.random() * (lengthOfArray - 1));
        }      
        return rand;
    }

    useEffect(() => {
        axios
        .get(
            `https://618bd026ded7fb0017bb9232.mockapi.io/youtube`
        )
        .then((response) => {
            setVideos(response.data);
        });
    }, []);

    useEffect(() => {
        if (videos) {
            const selectedVideo = videos.find(vid => vid.id === id);
            _setVideos(selectedVideo);
        }
    },[videos, id]);

    // Generate random article
    useEffect(() => {
        setOtherVideo1(getRandomWithOneExclusion(10, id))
        setOtherVideo2(getRandomWithOneExclusion(9, otherVideo1))
        setOtherVideo3(getRandomWithOneExclusion(8, otherVideo2))
    },[videos, id]);
    
    return (
        <div>
            {/* ADJUST WIDTH */}
            <div className="px-10 md:px-28 xl:px-30 2xl:px-60">
                {/* PLACE VIDEO HERE */}
                <div className="mt-10">
                    <iframe width="850" height="400" title="myFrame"
                        src={selectedVideo && selectedVideo.youtubeLink}>
                    </iframe>
                </div>

                {/* HEAD */}
                <div className="pt-16 font-bold text-3xl">
                    {selectedVideo && selectedVideo.title}
                </div>

                {/* CONTENT */}
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    <div className="md:hidden block pb-12">
                        <p className="text-md font-bold">Salman Setiawan</p>
                        <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                    </div>

                    {/* ARTICLE */}
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify">
                        {selectedVideo && selectedVideo.description}
                    </div>
                    
                    {/* OTHER ARTICLE */}
                    <div className="px-0 md:px-10 text-md leading-relaxed text-justify">
                        <div className="hidden md:block">
                            <p className="text-md font-bold">Salman Setiawan</p>
                            <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                        </div>
                        <div className="pt-2 md:pt-10 font-bold">
                            Other Article
                        </div>
                        <div className="pt-3">
                            <div className="pt-3">
                                {videos.length === 0 ? <div>Loading</div> : <Card
                                    key={videos[otherVideo1].id}
                                    title={videos[otherVideo1].title}
                                    image={videos[otherVideo1].imageLink}
                                    id={videos[otherVideo1].id}
                                    category="videos"
                                />}
                            </div>
                            <div className="pt-3">
                                {videos.length === 0 ? "" : <Card
                                    key={videos[otherVideo2].id}
                                    title={videos[otherVideo2].title}
                                    image={videos[otherVideo2].imageLink}
                                    id={videos[otherVideo2].id}
                                    category="videos"
                                />}
                            </div>
                            <div className="pt-3">
                                {videos.length === 0 ? "" : <Card
                                    key={videos[otherVideo3].id}
                                    title={videos[otherVideo3].title}
                                    image={videos[otherVideo3].imageLink}
                                    id={videos[otherVideo3].id}
                                    category="videos"
                                />}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Videoplay
