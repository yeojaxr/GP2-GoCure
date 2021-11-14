import React from "react";

const Content = (props) => {
  return (
    <>
      <article>
        <h1 className="text-xl lg:text-2xl font-bold mb-5">
          {props.subtitle}
        </h1>
        <p className="mb-12 para-1">
          {props.paragraph.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, '')}
          {/* I don’t want to brag, but back in the day, I was a
          real DIY trailblazer. Before bread machines,
          before instant pressure cookers, before the rise
          of the Cuisinart, before whatever came (and in
          some cases, came and went…like the motorized ice
          cream cone), I had a yogurt maker. It was a marvel
          of sleek pop design, made by Salton. Yogurt
          started booming in America thanks to a clever ad
          campaign by Dannon, and the machine meant that
          anyone could DIY their own yogurt with this
          boat-shaped contraption, which seemed like a
          miracle to me. */}
        </p>
      </article>
    </>
  );
};

export default Content;
