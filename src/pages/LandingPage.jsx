import CallButton from "../components/CallButton";
import CallText from "../components/CallText";
import HeadImg from "../images/experts-header.svg";

import React from 'react'

export default function LandingPage() {
    return (
        <div className="px-64 py-20">
            <div className="flex flex-row justify-between items-center gap-x-20">
                <div className="flex flex-col">
                    <p className="text-4xl font-bold">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. 
                    </p>
                    <p className="pt-6 text-xl mr-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque fermentum felis a neque pulvinar luctus. 
                    </p>
                    <div className="mt-10">
                        <CallButton />
                        <br/>
                        <CallText />
                    </div>
                </div>
                <img className="h-60 object-contain md:object-scale-down" src={HeadImg} alt="" />
            </div>
        </div>
    )
}