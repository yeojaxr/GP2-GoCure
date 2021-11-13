import { createContext, useEffect, useState } from "react";
import axios from "axios";

function createNewVideo(video) {
  return {
    id: video.id,
    title: video.title,
    description: video.description,
    youtubeLink: video.youtubeLink,
    imageLink: video.imageLink,
  };
}

const defaultValue = [];

export const VideosContext = createContext(defaultValue);

export function VideosProvider({ children }) {
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

  const contextValue = {
    videos: videos,
  };

  // console.log("VideoContext", contextValue);

  return (
    <VideosContext.Provider value={contextValue}>
      {children}
    </VideosContext.Provider>
  );
}
