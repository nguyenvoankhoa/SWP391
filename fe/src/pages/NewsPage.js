import React from "react";
import Title from "../components/Title";
import NewsItem from "../components/NewsItem";

const NewsPage = () => {
  return (
    <>
      <Title color="#DD6E42" fontSize="50px" fontWeight="700" title="TIN TỨC" />
      <div className="container">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </>
  );
};

export default NewsPage;
