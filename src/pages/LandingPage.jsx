import HeadImg from "../images/home/header.svg";
import ProfileImg from "../images/home/profile.svg";
import FeatureImg from "../images/home/video.svg";
import FeatureBlog from "../images/home/blogs.svg";
import FeatureExpert from "../images/home/experts.svg";
import FeatureList from "../components/FeatureList";
import React, { useState } from "react";
import LogoImg from '../images/logo.svg';
import SmallButton from "../components/SmallButton";
import SmallText from "../components/SmallText";
import "../css/style.css";
import BgImg from "../images/bg-wave.svg";

export default function LandingPage() {
  const [image, setImage] = useState(FeatureImg)

  return (
    <div>
      <nav className="bg-white py-1 fixxed px-48 shadow-sm">
        <div class="relative flex items-center justify-between h-16">

            {/* LOGO */}
            <div className="flex items-center">
              <img className="h-9" src={LogoImg} alt="Workflow" />
            </div>

            {/* MENU */}
            <div className="flex items-center justify-end space-x-4">
              <SmallButton title="Register" />
              <SmallText title="Login" />
            </div>

        </div>
      </nav>

      <div className="px-48 pt-40 flex flex-row justify-between items-center gap-x-12">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">
            The right care at
            <br />
            the right time.
          </p>
          <p className="pt-6 text-lg mr-8">
            Our platform empowers peoples with
            clinically-backed digital tools for proactively
            improving mental wellbeing.
          </p>
          <div className="pt-16 flex flex-row gap-x-8">
            <SmallButton title="Register Now" />
          </div>
        </div>
        <img className="w-96" src={HeadImg} alt="" />
      </div>
      
      <div className="px-48 pt-72 pb-12 flex flex-row justify-between items-center gap-x-12">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">
            Who we are?
          </p>
          <p className="pt-6 text-lg mr-8">
            GoCure is a platform for helping our user to keep their
            mental health keep healthy and safe through our content
          </p>
        </div>
        <img className="w-96" src={ProfileImg} alt="" />
      </div>

      {/* <div className="pt-60">
        <div className="text-center font-black text-3xl">
          Feature
        </div>
        <div className="pt-12 flex flex-row justify-between items-center gap-x-8">
          <FeatureCard title="Blogs" pic="landing-blogs.svg"/>
          <FeatureCard title="Videos" pic="landing-videos.svg"/>
          <FeatureCard title="Experts" pic="landing-experts.svg"/>
        </div>
      </div> */}

      <img src={BgImg} className="w-full" alt=""/>

      <div className="bg-extra-content px-48 pb-60 flex flex-row justify-between items-center gap-x-16">
        <img className="w-96" src={FeatureImg} alt="" />
        <div className="flex flex-col mr-8">
          <div className="font-bold text-3xl">
            Here's our content that you might like
          </div>
          <div onClick={() => setImage(FeatureImg)}><FeatureList title="Blogs" category="blogs"/></div>
          <div onClick={() => setImage(FeatureBlog)}><FeatureList title="Videos" category="videos"/></div>
          <div onClick={() => setImage(FeatureExpert)}><FeatureList title="Experts" category="experts"/></div>
          {/* <FeatureList title="Videos" category="videos"/>
          <FeatureList title="Experts" category="experts"/> */}
        </div>
        <img className="w-96" src={image} alt="" />
      </div>
      
      <div className="bg-extra-content px-48 pt-24 pb-60 flex flex-row justify-between items-center gap-x-12">
        <div className="flex flex-col mr-8">
          <div className="font-bold text-4xl">
            Our user stories
          </div>
          <FeatureList title="Blogs" />
          <FeatureList title="Videos" />
          <FeatureList title="Experts" />
        </div>
        <img className="w-96" src={FeatureImg} alt="" />
      </div>
    </div>
  );
}