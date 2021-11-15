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
        </p>
      </article>
    </>
  );
};

export default Content;
