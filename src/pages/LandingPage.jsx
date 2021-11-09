import CallButton from "../components/CallButton";
import CallText from "../components/CallText";
import HeadImg from "../images/experts-header.svg";
import FeatureCard from "../components/FeatureCard";

import React from "react";

export default function LandingPage() {
  return (
    <div className="px-48 py-20">
      <div className="flex flex-row justify-between items-center gap-x-5">
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
          {/* <div className="pt-20 flex flex-row gap-x-8"> */}
          <div className="pt-16 flex flex-row gap-x-8">
            <CallButton />
            <CallText />
          </div>
        </div>
        <img className="h-96" src={HeadImg} alt="" />
      </div>
      <div className="py-60">
        <div className="flex flex-row justify-between items-center gap-x-8">
          <FeatureCard title="Videos" />
          <FeatureCard title="Blogs" />
          <FeatureCard title="Experts" />
        </div>
      </div>
    </div>
  );
}
