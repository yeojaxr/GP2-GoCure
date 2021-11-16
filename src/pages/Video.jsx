import CardVideo from "../components/CardVideo";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {LoadingPage} from "./LoadingPage"
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user-context";

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

  console.log(videos)

  const navigate = useNavigate();
  const {user} = useUser();

  // Return to landing page if user not login
  useEffect(() => {
    if(user){
      if(user.length !== 0){
        const currentUser = user.find((u) => u.userLogged === true)
        if(currentUser){
          navigate("/videos")
        } else navigate("/")
      } else navigate("/")
    }
  }, [user, navigate])

  // loading
  if(videos.length === 0){
    return (
      <LoadingPage/>
    )
  }

  return (
    <div>
      <div className="flex justify-center gap-x-4 md:gap-x-8 px-4 sm:px-4 lg:px-40 xl:px-60 2xl:px-96">
        <div className="pr-10 md:pr-16 lg:pr-0">
          <Header name="Videos" pic="video-header.svg" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
            {videos && videos.map((vid) => (
              <CardVideo
                key={vid.id}
                title={vid.title}
                image={vid.imageLink}
                id={vid.id}
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
  );
};

export default Video;