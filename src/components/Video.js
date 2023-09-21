import React from 'react';
import Card from 'react-bootstrap/Card';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import '../App.css';

const Video = ({title="no title avilable" , username="user not avilable" , views="no views" , period=" now uploded" , userlogo , videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}) => {
  return (
    <div className="my-md-3 col-md-3">
      <Card className="p-0">
        <Player width={300} height={200} className="rounded"
          playsInline
          poster="/assets/poster.png"
          src={videoUrl}
        />
        <Card.Body className="d-flex align-items-baseline flex-column">
          <div className="d-flex align-items-center">
            <Card.Img className="rounded-pill cardImage" variant="top" src={userlogo} />
            <Card.Title className="px-2 fs-5 text-align-justify">{title}</Card.Title>
          </div>
          <div className="d-flex flex-column px-4 align-items-center video-info">
            <Card.Text className="d-flex col-md-12 justify-content-start">
              <small className="text-muted px-1">{username}</small>
              <small className="text-muted px-1"></small>
            </Card.Text>
            <Card.Text className="d-flex col-md-12 justify-content-start">
              <small className="text-muted px-1">{views}</small>
              <small className="text-muted px-1">{period}</small>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Video;
