import React from "react";

const News = ({ articles }) => {
    const defaultImage =
      "https://img.freepik.com/free-photo/fake-news-works-coming-out-megaphone_23-2149261954.jpg";
  return (
    <div className="min-h-[400px]">
      {articles.map((article, index) => (
        <div key={article.title} style={{ marginBottom: "20px" }}>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt="Article"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
          )}
          {!article.urlToImage && (
            <img
              src={defaultImage}
              alt="Article"
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
          )}

          <h2>{article.title}</h2>
          <h4>Source: {article.source.name}</h4>
          <p>{article.description}</p>
          <p>{article.content}</p>
          <a
            href={article.url}
            target="_blank"
            
            className="text-green-600"
          >
            Read more
          </a>
          <br/>
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default News;
