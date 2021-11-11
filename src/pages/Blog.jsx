import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from 'react';
import useFetchArticle from "../services/articleApi";

const Blog = () => {
    const { article } = useFetchArticle(); 

    return (
        <div>
            <div className="flex justify-center gap-x-4 md:gap-x-8 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="pl-4 md:pl-0">
                    <Header name="Blogs" pic="blog-header.svg" />
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-2 md:gap-y-4">
                        {article && article.map(art => 
                        <Card 
                            key={art.Id} 
                            title={art.Title} 
                            image={art.ImageUrl} 
                            id={art.Id}
                        />)}
                    </div>
                </div>
                <div className="pr-4 md:pr-0 flex items-center sticky top-0 h-screen">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Blog
