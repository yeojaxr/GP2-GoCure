import React from 'react'
import ImgArticle from '../images/food-1.jpg'

const Article = () => {
    return (
        <div>
            {/* HEAD */}
            <div className="bg-purple-800 title-page">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="pt-0 md:pt-52 pl-10 md:pl-28 pr-6">
                        <div className="pt-0 md:pt-56 pb-4">
                            <div className="py-4 text-4xl font-bold text-white">
                                Tips menjaga kesehatan mental di usia remaja
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover h-full">
                        <img src={ImgArticle} alt="" />
                    </div>
                </div>
            </div>
            
            {/* ADJUST WIDTH */}
            <div className="px-12 md:px-28 xl:px-36 2xl:px-60">

                {/* CONTENT */}
                <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    {/* AUTHOR */}
                    <div>
                        <p className="text-md font-bold">Salman Setiawan</p>
                        <p className="text-sm pt-2">Kamis, 24 Oktober 2021</p>
                    </div>

                    {/* ARTICLE */}
                    <div className="text-md leading-relaxed text-justify article-content">
                        <p className="pb-4 para-1">
                            I don’t want to brag, but back in the day, I was a real DIY trailblazer. Before bread machines, before instant pressure cookers, before the rise of the Cuisinart, before whatever came (and in some cases, came and went…like the motorized ice cream cone), I had a yogurt maker. It was a marvel of sleek pop design, made by Salton. Yogurt started booming in America thanks to a clever ad campaign by Dannon, and the machine meant that anyone could DIY their own yogurt with this boat-shaped contraption, which seemed like a miracle to me.
                        </p>
                        <p className="py-4 para-2">
                            When I worked in a natural food vegetarian restaurant a few years later, we made our own yogurt in empty gallon mayonnaise jars. Proving that DIY folks can always make room for exceptions, we bought Hellman’s mayonnaise because we used it by the gallon for salad dressing and our kitchen was anti-machine, and no one wanted to make (or had the muscles) to make 2 gallons of mayonnaise at a time by hand.
                        </p>
                        <p className="py-4 para-3">
                            We weren’t alone; years later when I lived in San Francisco, a friend was the pastry chef at a very popular, and very busy restaurant. She made all her ice cream from scratch but ended up buying locally-made vanilla ice cream because she simply couldn’t keep up, or churn up, with the demand. It was hard to criticize her because some days, in my professional baking days, I used to go on a tear where I worked, and make 20 gallons of vanilla ice cream at a time, then spend the day churning it all in our modest machine, just to keep up with demand. I love making ice cream but it took me away from creating other things and nowadays I’ve learned that life gets a little easier when you realize that you can’t do everything and it’s about priorities.
                        </p>
                    </div>
                    
                    {/* OTHER ARTICLE */}
                    <div className="text-md leading-relaxed text-justify">
                        <div className="font-bold">
                            Other Article
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Article
