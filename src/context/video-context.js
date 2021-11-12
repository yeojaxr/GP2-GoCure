import { createContext, useEffect, useState } from "react";

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
    const url = "https://618bd026ded7fb0017bb9232.mockapi.io/youtube";
    fetch(url)
      .then((response) => response.json())
      .then((responseVideos) => responseVideos.map(createNewVideo))
      .then(setVideos);
  }, []); // componentDidMount

  const contextValue = {
    videos: videos
  };

  console.log("VideoContext", contextValue);

  return (
    <VideosContext.Provider value={contextValue}>
      {children}
    </VideosContext.Provider>
  );
}
