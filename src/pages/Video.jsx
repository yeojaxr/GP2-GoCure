import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useState, useEffect} from "react";
import axios, { Axios } from "axios";

const Video = () => {
  const [data, _setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://618bd026ded7fb0017bb9232.mockapi.io/youtube`
      )
      .then((response) => {
        _setData(response.data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96">
        <div className="">
          <Header name="Videos" pic="video-header.svg" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex items-center sticky h-screen">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Video;
