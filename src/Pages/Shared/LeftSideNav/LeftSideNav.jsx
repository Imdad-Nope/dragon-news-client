import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        fetch('https://dragon-news-server-two-lime.vercel.app/news-paper')
        .then(res=>res.json())
        .then(data=>setCategories(data))

    },[])

    return (
        <React.Fragment>

            <h2>Categories: {categories.length}</h2>
        <div>
            {
                categories.map(category=> <p
                key={category.id}
                >
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
        </React.Fragment>
    );
};

export default LeftSideNav;