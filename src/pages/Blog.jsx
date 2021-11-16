import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useEffect, useState} from "react";
import useFetchArticle from "../services/articleApi";
import {LoadingPage} from "./LoadingPage"
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user-context";

const Blog = () => {
  const { article } = useFetchArticle();
  console.log("article", article);
  
  const navigate = useNavigate();
  const {user} = useUser();

  // Return to landing page if user not login
  useEffect(() => {
    if(user){
      if(user.length !== 0){
        const currentUser = user.find((u) => u.userLogged === true)
        if(currentUser){
          navigate("/blogs")
        } else navigate("/")
      } else navigate("/")
    }
  }, [user, navigate])
  
  //  loading
  if(article == null){
    return (
      <LoadingPage/>
    )
  }

  return (
    <div>
      <div className="flex justify-center gap-x-4 md:gap-x-8 px-4 sm:px-4 lg:px-40 xl:px-60 2xl:px-96">
        <div className="pr-10 md:pr-16 lg:pr-0">
          <Header 
            name="Blogs" 
            pic="blog-header.svg" 
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-2 md:gap-y-4">
            {article &&
              article.map((art) => (
                <Card
                  key={art.Id}
                  title={art.Title}
                  image={art.ImageUrl}
                  id={art.Id}
                  category="blogs"
                  page="blogsPage"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="sidebar flex items-center pr-4 md:pr-6 lg:pr-24 xl:pr-44 py-40 xl:py-64">
        <Navbar />
      </div>
    </div>
  );
};

export default Blog;
