import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="">
                    <div>
                        <Header hi="Hello" name="Toji Fushiguro" pic="tojj.jpg" />
                    </div>
                    <div className="pb-4 text-lg font-bold">
                        Blog that you liked
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-4">
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                    </div>
                    <div className="pt-6 pb-4 text-lg font-bold">
                        Video that you liked
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-4">
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                        <Card image="tojj.jpg" />
                    </div>
                </div>
                <div className="flex items-center sticky h-screen">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Profile
