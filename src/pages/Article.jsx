import React, {useEffect, useState} from 'react'
import Card from '../components/Card';
import { useParams } from "react-router-dom";
import useFetchArticle from "../services/articleApi";
import Content from '../components/ContentArticle';

const Article = () => {
    const { id } = useParams();
    const { article } = useFetchArticle();
    const [selectedArticle, setArticle] = useState({});
    const [selectedContent, setContent] = useState({});

    useEffect(() => {
        if (article) {
            const _selectedArticle = article.filter(art => art.Id === id);
            setArticle(_selectedArticle);

            const _selectedContent = _selectedArticle[0].Sections.section;
            setContent(_selectedContent);
            console.log(_selectedContent);
        }
    },[article, id]);

    console.log(selectedContent);

    return (
        <div>
            {/* HEAD */}
            <div className="bg-purple-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="pt-0 md:pt-52 pl-10 md:pl-28 pr-6 pb-12 md:pb-16">
                        <div className="pt-16 md:pt-56 pb-0 md:pb-4">
                            <div className="py-0 md:py-4 text-2xl md:text-4xl font-bold text-white">
                                {selectedArticle.length === undefined ? <div className="pb-16">Loading</div> : selectedArticle[0].Title}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={selectedArticle.length === undefined ? "" : selectedArticle[0].ImageUrl} alt="" className="object-cover h-full"/>
                    </div>
                </div>
            </div>
            
            {/* ADJUST WIDTH */}
            <div className="px-10 md:px-28 xl:px-30 2xl:px-60">

                {/* CONTENT */}
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    <div className="md:hidden block pb-12">
                        <p className="text-md font-bold">Salman Setiawan</p>
                        <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                    </div>

                    {/* ARTICLE */}
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify article-content">
                        {selectedContent.length === undefined ? "" : selectedContent.map(content => <Content key={content.Title} subtitle={content.Title} paragraph={content.Content}/>)}
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

export default Article
