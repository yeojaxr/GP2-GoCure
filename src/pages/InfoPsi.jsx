import React from 'react'
import Navbar from '../components/Navbar'

const InfoPsi = () => {
    return (
        <div>
            {/* PLACE PICTURE HERE */}


            {/* ADJUST WIDTH */}
            <div className="px-5 md:px-12 lg:px-28 xl:px-30 2xl:px-60">
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    {/* CONTENT */}
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify">
                        <div className="pb-2 font-bold text-2xl">
                            Nama Expert
                        </div>
                        <div className="pb-6 font-bold text-md">
                            Role
                        </div>
                        <div className="border-t-2 pt-6">
                            Deskripsi
                        </div>
                    </div>

                </div>
            </div>

            <div className="sidebar flex items-center pr-2 md:pr-3 lg:pr-4 xl:pr-16 py-36 lg:py-40 xl:py-64">
                <div className="bg-white px-2.5 md:px-3 lg:px-4 rounded-full">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default InfoPsi
