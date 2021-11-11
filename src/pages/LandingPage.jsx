import HeadImg from "../images/home/header.svg";
import ProfileImg from "../images/home/profile.svg";
import FeatureVideo from "../images/home/video.svg";
import FeatureBlog from "../images/home/blogs.svg";
import FeatureExpert from "../images/home/experts.svg";
import FeatureList from "../components/FeatureList";
import React, { useState } from "react";
import LogoImg from '../images/logo.svg';
import SmallButton from "../components/SmallButton";
import SmallText from "../components/SmallText";
import "../css/style.css";
import BgImg from "../images/bg-wave.svg";
import Testimonial from "../components/Testimonial";
import TestiList from "../components/TestiList";
import TestiImg from "../images/home/avatar-toji.png";

export default function LandingPage() {
  const [image, setImage] = useState(FeatureBlog)

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
      
      <div className="px-48 pt-72 pb-8 flex flex-row justify-between items-center gap-x-12">
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

      <img src={BgImg} className="w-full" alt=""/>

      <div className="bg-extra-content px-48 pb-60 flex flex-row justify-between items-center gap-x-20">
        <img className="w-96" src={image} alt="" />
        <div className="flex flex-col mr-8">
          <div className="font-bold text-3xl">
            Here's our content that you might like
          </div>
          <div onClick={() => setImage(FeatureBlog)}>
            <FeatureList 
              title="Blogs" 
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum felis a neque pulvinar luctus."
            />
          </div>
          <div onClick={() => setImage(FeatureVideo)}>
            <FeatureList 
              title="Videos"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum felis a neque pulvinar luctus."
            />
          </div>
          <div onClick={() => setImage(FeatureExpert)}>
            <FeatureList 
              title="Experts"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum felis a neque pulvinar luctus."
            />
          </div>
        </div>
      </div>
      
      <div className="bg-extra-end px-48 pt-24 pb-60 grid grid-cols-2 gap-x-12">
        <div className="avatar-bg bg-cover bg-center pt-72 shadow-md">
          <Testimonial             
            name="Toji Fushiguro" 
            roles="I am a sorcerer hunter who is still working hard to achieve success and sometime i always said to be a burden on parents. It made me depressed. but at GoCure, I can easily tell about the condition I'm experiencing, as time goes by my depression gone by itself."    
          />
        </div>
        <div className="flex flex-col mr-8">
          <div className="font-bold text-4xl pb-2">
            Our user stories
          </div>
          <TestiList 
            img="avatar-gojo.png" 
            name="Satoru Gojo" 
            roles="Tokyo Jujutsu High, Teacher" 
          />
          <TestiList 
            img="avatar-yuji.png" 
            name="Yuji Itadori" 
            roles="Tokyo Jujutsu High, 1st Year Student" 
          />
          <TestiList 
            img="avatar-toji.png" 
            name="Toji Fushiguro" 
            roles="Ex-member, Zenin Family" 
          />
        </div>
      </div>
    </div>
  );
}