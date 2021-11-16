import PsiCard from "../components/PsiCard";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useState, useEffect} from 'react'
import axios from "axios";
import {LoadingPage} from "./LoadingPage"
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user-context";

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

const navigate = useNavigate();
const {user} = useUser();

  useEffect(() => {
    if(user){
      if(user.length !== 0){
        const currentUser = user.find((u) => u.userLogged === true)
        if(currentUser){
          navigate("/experts")
        } else navigate("/")
      } else navigate("/")
    }
  }, [user, navigate])

  // loading
  if(experts.length === 0){
    return (
      <LoadingPage/>
    )
  }

    return (
        <div className="bg-gray-50 h-screen">
            <div className="flex justify-center gap-x-4 md:gap-x-8 px-3 sm:px-4 lg:px-40 xl:px-60 2xl:px-96 py-3"> 
                <div className="pr-10 md:pr-16 lg:pr-0 w-full">
                    <Header 
                      name="Experts" 
                      pic="expert-header.svg" 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 md:gap-y-4">
                    {experts &&
                        experts.map((exp) => (
                            <PsiCard
                              key={exp.id}
                              title={exp.name}
                              image={exp.imageUrl}
                              id={exp.id}
                              description="Psikolog"
                              category="experts"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="sidebar flex items-center pr-1 md:pr-6 lg:pr-24 xl:pr-44 py-40 xl:py-64">
              <Navbar />
            </div>
        </div>
    )
}

export default Expert
