
import React, { useState, useEffect } from 'react'
// GET https://newsapi.org/v2/top-headlines?country=ae&apiKey=f2be1783a51349419d8e296749590b67
import News from './News';

const HeadLines = (props) => {
   const [articles, setArticles] = useState([]);

   useEffect(() => {
     // Assume this is your JSON data fetch operation
     const fetchData = async () => {
       // Simulated fetch operation
       const response = await fetch(
         `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&pageSize=100&apiKey=f2be1783a51349419d8e296749590b67`
       );
       const data = await response.json();
       setArticles(data.articles);
     };

     fetchData();
   }, []);

   return (
     <div className="h-full mt-[40px] px-24">
       <div className="flex flex-col gap-4">
         <News articles={articles} />
       </div>
     </div>
   );
}

export default HeadLines;