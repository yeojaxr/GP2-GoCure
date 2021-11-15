import PsiCard from "../components/PsiCard";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useState, useEffect} from 'react'
import axios from "axios";

const Expert = () => {
const [experts, setExperts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://618bd026ded7fb0017bb9232.mockapi.io/psikolog`
      )
      .then((response) => {
        setExperts(response.data);
      });
  }, []);

    return (
        <div>
            <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="">
                    <Header name="Experts" pic="expert-header.svg" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4">
                    {experts &&
                        experts.map((exp) => (
                            <PsiCard
                            key={exp.id}
                            title={exp.Name}
                            image={exp.imageUrl}
                            id={exp.Id}
                            category="experts"
                            />
                        ))}
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
