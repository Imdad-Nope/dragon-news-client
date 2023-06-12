import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    // console.log('All news', allNews);
    return (
        <React.Fragment>

        <div>
            <h2>This is home news : {allNews.length}</h2>
            {
                allNews.map(news=> <NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }
        </div>
        </React.Fragment>
    );
};

export default Home;

