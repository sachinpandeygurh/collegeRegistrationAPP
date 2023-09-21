import React from "react";
import Video from "./Video";

const Main = () => {
  const videos = [
    {
      title: "Exploring the Mysteries of Deep Sea Creatures",
      username: "OceanExplorer123",
      views: "2.5M views",
      period: "1 week ago",
      userlogo: "https://picsum.photos/id/237/200/300",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
      title: "Cooking the Perfect Pizza from Scratch",
      username: "ChefMasters",
      views: "1.8M views",
      period: "3 days ago",
      userlogo: "https://picsum.photos/id/354/200/300",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
      title: "Unbelievable Parkour Stunts Compilation",
      username: "ExtremeAdventures",
      views: "4.3M views",
      period: "2 weeks ago",
      userlogo: "https://picsum.photos/id/235/200/300",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
    {
      title: "Hidden Waterfalls in the Amazon Rainforest",
      username: "WildlifeExplorer",
      views: "5.7M views",
      period: "4 days ago",
      userlogo: "https://picsum.photos/id/236/200/300",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
  ];

  return (
    <div className="container-xxl mt-3 mt-md-1">
      <div className="col-md-12 row">
        {videos.map((video) => (
          <Video
            key={video.title}
            title={video.title}
            username={video.username}
            views={video.views}
            period={video.period}
            userlogo={video.userlogo}
            videoUrl={video.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
