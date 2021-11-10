import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React from 'react'
import useFetchArticle from "../services/articleApi"

const Blog = () => {
    const { data: article, error } = useFetchArticle();    
    console.log(article);
    console.log(error);

    return (
        <div>
            <div className="flex justify-center gap-x-4 lg:px-40 xl:px-60 2xl:px-96"> 
                <div className="">
                    <Header name="Blogs" pic="blog-header.svg" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4">
                        {article && article.map(art => <Card key={art.Id} title={art.Title}/>)}
                    </div>
                </div>
                <div className="flex items-center sticky top-0 h-screen">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Blog
