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
import { useUser } from "../context/user-context";

export default function LandingPage() {
  const [image, setImage] = useState(FeatureBlog)
  const [imageTesti, setImageTesti] = useState("testi-1.png")
  const [nameTesti, setNameTesti] = useState("William Hill")
  const [descTesti, setDescTesti] = useState("I'm a sorcerer hunter who is working hard to achieve success and sometime i always said to be a burden on parents. It made me depressed. but at GoCure, I can easily tell my condition I'm experiencing, as time goes by my depression gone by itself")

  const {user} = useUser();
  let currUser = false;

  const currentUser = user.find((u) => u.userLogged === true)
  if (currentUser) {
    currUser = true;
  }

  return (
    <div>
      <nav className="bg-white py-1 fixxed px-8 md:px-48 shadow-sm">
        <div className="relative flex items-center justify-between h-16">

            {/* LOGO */}
            <div className="flex items-center">
              <img className="h-7 md:h-9" src={LogoImg} alt="Workflow" />
            </div>

            {/* MENU */}
            <div className="flex items-center justify-end gap-x-2 md:gap-x-4">
              {
                (currUser) ? <SmallButton title="Logout"/> : 
                (<>
                  <SmallButton title="Register" url="/register"/>
                  <SmallText title="Login" url={"/login"}/>
                </>)
              }
            </div>
            
        </div>
      </nav>
      
      <div className="flex items-center justify-center">
        <section>
          <div className="px-8 md:px-48 pt-40 flex flex-col md:flex-row justify-between items-center gap-x-12">
            <div className="flex flex-col">
              <p className="text-xl md:text-3xl font-bold">
                The right care at
                <br />
                the right time.
              </p>
              <p className="pt-4 md:pt-6 text-sm md:text-lg mr-12 md:mr-8">
                Our platform empowers peoples with
                clinically-backed digital tools for proactively
                improving mental wellbeing.
              </p>
              <div className="pt-9 md:pt-16 flex flex-row gap-x-8">
                <SmallButton title="Register Now" url="/register"/>
              </div>
            </div>
            <img className="md:pt-0 pt-20 w-72 md:w-96" src={HeadImg} alt="" />
          </div>
          
          <div className="px-8 md:px-48 pt-72 pb-8 flex flex-col md:flex-row justify-between items-center gap-x-12">
            <img className="md:hidden block pb-12 w-72 md:w-96" src={ProfileImg} alt="" />
            <div className="flex flex-col">
              <p className="text-xl md:text-3xl font-bold">
                Who we are?
              </p>
              <p className="pt-4 md:pt-6 text-sm md:text-lg mr-12 md:mr-8">
                <b>GoCure</b> is a platform for helping our user to keep their
                mental health keep healthy and safe through our content
              </p>
            </div>
            <img className="hidden md:block pt-0 w-72 md:w-96" src={ProfileImg} alt="" />
          </div>

          <img src={BgImg} className="w-full" alt=""/>

          <div className="bg-extra-content px-8 md:px-48 pb-24 md:pb-60 flex flex-col md:flex-row justify-between items-center gap-x-20">
            <div className="pt-20 md:hidden block font-bold text-xl md:text-3xl">
                Here's our content that you might like
            </div>
            <img className="md:pt-0 pt-10 w-56 md:w-96" src={image} alt="" />
            <div className="flex flex-col">
              <div className="hidden md:block font-bold text-xl md:text-3xl">
                Here's our content that you might like
              </div>
              <div onClick={() => setImage(FeatureBlog)}>
                <FeatureList 
                  title="Blogs" 
                  desc="A mental health's article that you can read, in order to increase your knowledge about mental health."
                />
              </div>
              <div onClick={() => setImage(FeatureVideo)}>
                <FeatureList 
                  title="Videos"
                  desc="There are videos of mental health on a different topic by an expert that you can watch and replay many times."
                />
              </div>
              <div onClick={() => setImage(FeatureExpert)}>
                <FeatureList 
                  title="Experts"
                  desc="Get closer to our experts and make the best meeting for your consultation in order to make your mental health even better."
                />
              </div>
            </div>
          </div>
          
          <div className="bg-extra-end px-8 md:px-48 pt-24 pb-60 grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <div className="pb-6 md:hidden block font-bold text-xl md:text-3xl">
              What our user think about <b>GoCure</b>
            </div>
            <Testimonial             
              name={nameTesti} 
              roles={descTesti}  
              img={imageTesti}  
            />
            <div className="flex flex-col">
              <div className="hidden md:block font-bold text-4xl pb-2">
                What our user think about <b>GoCure</b>
              </div>
              <div onClick={() => {
                setImageTesti("testi-1.png"); 
                setNameTesti("William Hill");
                setDescTesti("I'm a sorcerer hunter who is working hard to achieve success and sometime i always said to be a burden on parents. It made me depressed. but at GoCure, I can easily tell my condition I'm experiencing, as time goes by my depression gone by itself")
                }}>
                <TestiList 
                  img="testi-1-avatar.png" 
                  name="William Hill" 
                  roles="Schneider Electric, IoT Developer" 
                />
              </div>
              <div onClick={() => {
                setImageTesti("testi-2.png"); 
                setNameTesti("Sarah Kehl");
                setDescTesti("Last year I started experiencing anxiety which was triggered by acute stress. GoCure has helped me develop relaxation techniques, and has made me think differently about things that were troubling me as well as giving me other coping techniques.")
                }}>
                <TestiList 
                  img="testi-2-avatar.png" 
                  name="Sarah Kehl" 
                  roles="Gojek Indonesia, Data Engineer" 
                  />
              </div>
              <div onClick={() => {
                setImageTesti("testi-3.png"); 
                setNameTesti("Sabrina Centrica");
                setDescTesti("Completing some of the Series within GoCure has really helped me get back on track with my productivity at work. GoCure helps me to look at things differently so I can minimise the impact of things like change. It provides me with ways to cope")
                }}>
                <TestiList 
                  img="testi-3-avatar.png" 
                  name="Sabrina Centrica" 
                  roles="Telkom University, 1st Year Student" 
                  />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}