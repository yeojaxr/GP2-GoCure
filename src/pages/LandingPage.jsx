import CallButton from "../components/CallButton";
import CallText from "../components/CallText";
import HeadImg from "../images/home/header.svg";
import FeatureCard from "../components/FeatureCard";
import ProfileImg from "../images/home/profile.svg";

import React from "react";

export default function LandingPage() {
  return (
    <div className="px-48 py-20">
      <div className="flex flex-row justify-between items-center gap-x-6">
        <div className="flex flex-col">
          <p className="text-4xl font-bold">
            The right care at
            <br />
            the right time.
          </p>
          <p className="pt-6 text-xl mr-8">
            Our platform empowers peoples with
            clinically-backed digital tools for proactively
            improving mental wellbeing.
          </p>
          <div className="pt-16 flex flex-row gap-x-8">
            <CallButton />
            <CallText />
          </div>
        </div>
        <img className="h-80" src={HeadImg} alt="" />
      </div>
      <div className="pt-60">
        <div className="flex flex-row justify-between items-center gap-x-6">
          <div className="flex flex-col">
            <p className="text-4xl font-bold">
              Who we are?
            </p>
            <p className="pt-6 text-xl mr-8">
              Our platform empowers peoples with
              clinically-backed digital tools for proactively
              improving mental wellbeing.
            </p>
          </div>
          <img className="h-80" src={ProfileImg} alt="" />
        </div>
      </div>
      <div className="py-60">
        <div className="text-center font-black text-3xl">
          Feature
        </div>
        <div className="pt-12 flex flex-row justify-between items-center gap-x-8">
          {/* Ganti judul video dan foto disini */}
          <FeatureCard title="Blogs" pic="landing-blogs.svg"/>
          <FeatureCard title="Videos" pic="landing-videos.svg"/>
          <FeatureCard title="Experts" pic="landing-experts.svg"/>
        </div>
      </div>
    </div>
  );
}