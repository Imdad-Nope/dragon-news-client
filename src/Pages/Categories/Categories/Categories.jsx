import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Categories = () => {
   const categoryNews = useLoaderData()
    return (
        <React.Fragment>

        <div>
           <h1>This is Category : {categoryNews.length}</h1>
           {
            categoryNews.map(news=> <NewsSummaryCard
            key={news._id}
            news={news}
            ></NewsSummaryCard>)
           }
        </div>
        </React.Fragment>
    );
};

export default Categories;