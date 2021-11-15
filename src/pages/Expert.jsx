import PsiCard from "../components/PsiCard";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from 'react'

const Expert = () => {
    return (
        <div>
            <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="">
                    <Header name="Experts" pic="expert-header.svg" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4">
                        <PsiCard />
                        <PsiCard />
                        <PsiCard />
                        <PsiCard />
                        <PsiCard />

                    </div>
                </div>
                <div className="flex items-center sticky h-screen">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Expert
