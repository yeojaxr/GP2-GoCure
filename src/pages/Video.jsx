import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useState, useEffect, useContext} from "react";
import { VideosContext } from "../context/video-context";
import axios from "axios";

const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://618bd026ded7fb0017bb9232.mockapi.io/youtube`
      )
      .then((response) => {
        setVideos(response.data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96">
        <div className="">
          <Header name="Videos" pic="video-header.svg" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
            {videos && videos.map((vid) => (
              <Card
                key={vid.id}
                title={vid.title}
                image={vid.imageLink}
                id={vid.id}
                category="videos"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center sticky top-0 h-screen">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Video;