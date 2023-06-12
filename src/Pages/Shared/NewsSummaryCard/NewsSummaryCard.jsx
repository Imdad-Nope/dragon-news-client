import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const {details, title, image_url, _id, author, rating, total_view} = news;
    return (
        <React.Fragment>

      <Card className="mb-4">
        <Card.Header className='d-flex justify-content-between align-items-center' >
          <div className='d-flex'>
          <Image src={author?.img} roundedCircle
          style={{height:'50px', marginRight: '10px'}}
        
          />
          <div>
              <p>{author?.name}</p>
              <p>{author?.published_date}</p>
          </div>
          </div>
          <div>
          <p className='mr-4'> <FaShareAlt/></p>
        <p><FaRegBookmark/></p>
          </div>
        </Card.Header>
      <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
          {
          details?.length > 200 ?
          <> {details?.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link>
          </>
          :
     <span>{details}</span>
          
          }
          </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
       <FaStar className='text-warning me-2'/>
        <span>{rating?.number}</span>
        </div>
        <div>
            <FaEye className='me-2'/>
            {total_view}
        </div>
      </Card.Footer>
    </Card>
        </React.Fragment>
    );
};

export default NewsSummaryCard;