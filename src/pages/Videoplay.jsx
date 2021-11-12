import Card from "../components/Card";
import React from 'react'

const Videoplay = () => {
    return (
        <div>
            {/* ADJUST WIDTH */}
            <div className="px-10 md:px-28 xl:px-30 2xl:px-60">
                {/* PLACE VIDEO HERE */}
                <div>

                </div>

                {/* HEAD */}
                <div className="pt-16 font-bold text-3xl">
                    Title
                </div>

                {/* CONTENT */}
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    <div className="md:hidden block pb-12">
                        <p className="text-md font-bold">Salman Setiawan</p>
                        <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                    </div>

                    {/* ARTICLE */}
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify">
                        Lorem Ipsum
                    </div>
                    
                    {/* OTHER ARTICLE */}
                    <div className="px-0 md:px-10 text-md leading-relaxed text-justify">
                        <div className="hidden md:block">
                            <p className="text-md font-bold">Salman Setiawan</p>
                            <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                        </div>
                        <div className="pt-2 md:pt-10 font-bold">
                            Other Article
                        </div>
                        <div className="pt-3">
                            <div className="pt-3">
                                <Card />
                            </div>
                            <div className="pt-3">
                                <Card />
                            </div>
                            <div className="pt-3">
                                <Card />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Videoplay
