import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const News = () => {
const news = useLoaderData()
const {image_url, details, category_id, title} = news;
    return (
        <React.Fragment>
  <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
      <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/categories/${category_id}`}>
        <Button variant="primary">Go to specific news</Button>
        </Link>
      </Card.Body>
    </Card>
        </React.Fragment>
    );
};

export default News;