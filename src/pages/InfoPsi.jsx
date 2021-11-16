import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const InfoPsi = () => {
    const { id } = useParams();
    const [psi, setPsi] = useState([]);
    const [selectedPsi, _setPsi] = useState([]);

    useEffect(() => {
        axios
        .get(
            `https://618bd026ded7fb0017bb9232.mockapi.io/psikolog`
        )
        .then((response) => {
            setPsi(response.data);
        });
    }, []);

    useEffect(() => {
        if (psi) {
            const selectedPsi = psi.find(p => p.id === id);
            _setPsi(selectedPsi);
        }
    },[psi, id]);

    return (
        <div>
            {/* PLACE PICTURE HERE */}
            <div className="bg-purple-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="pt-0 md:pt-52 pl-5 md:pl-7 lg:pl-16 xl:pl-36 pr-8 md:pr-6 pb-12 md:pb-16">
                        <div className="pt-16 md:pt-56 pb-0 md:pb-4">
                            <div className="py-0 md:py-4 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                {selectedPsi && selectedPsi.name}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={selectedPsi && selectedPsi.imageUrl} alt="" className="object-cover h-full"/>
                    </div>
                </div>
            </div>

            {/* ADJUST WIDTH */}
            <div className="px-5 md:px-12 lg:px-28 xl:px-30 2xl:px-60">
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    {/* CONTENT */}
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify">
                        <div className="pb-2 font-bold text-2xl">
                            Profile Expert
                        </div>
                        <div className="pb-6 font-bold text-md">
                            Psikolog
                        </div>
                        <div className="border-t-2 pt-6">
                            {selectedPsi && selectedPsi.profil}
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
