import React, { useEffect, useState } from "react";
import Video from "./Video";
import axios from 'axios'
import { createClient } from 'pexels';


const Main = () => {
const [data , setData] = useState([])
useEffect(()=>{
  getVideo()
},[data])
// const client = createClient('ZcKKEofNfExmrRniZgsT1Zhv9b3bZgWytxD6fQmBYzo0LtLMZoZknBoh');
const api = 
// "https://api.pexels.com/v1/"
// 'https://api.pexels.com/v1/curated?page=2&per_page=40'
'https://api.pexels.com/videos/videos/2499611'
const getVideo = async () => {

  try {
    const res = await axios.get(api, {
      headers: {
        Authorization: 'ZcKKEofNfExmrRniZgsT1Zhv9b3bZgWytxD6fQmBYzo0LtLMZoZknBoh', 
      },
      
    });
    setData(res?.data?.video_files);
    console.log(res?.data)
  } catch (error) {
    console.log('Error', error);
  }
};

  // const videos = [
  //   {
  //     title: "Exploring the Mysteries of Deep Sea Creatures",
  //     username: "OceanExplorer123",
  //     views: "2.5M views",
  //     period: "1 week ago",
  //     userlogo: "https://picsum.photos/id/237/200/300",
  //     videoUrl: "https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761" 
  //   },
  //   {
  //     title: "Cooking the Perfect Pizza from Scratch",
  //     username: "ChefMasters",
  //     views: "1.8M views",
  //     period: "3 days ago",
  //     userlogo: "https://picsum.photos/id/354/200/300",
  //     videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  //   },
  //   {
  //     title: "Unbelievable Parkour Stunts Compilation",
  //     username: "ExtremeAdventures",
  //     views: "4.3M views",
  //     period: "2 weeks ago",
  //     userlogo: "https://picsum.photos/id/235/200/300",
  //     videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  //   },
  //   {
  //     title: "Hidden Waterfalls in the Amazon Rainforest",
  //     username: "WildlifeExplorer",
  //     views: "5.7M views",
  //     period: "4 days ago",
  //     userlogo: "https://picsum.photos/id/236/200/300",
  //     videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  //   },
  // ];

  return (
    <div className="container-xxl mt-3 mt-md-1">
      <div className="col-md-12 row">
        {data.map((video , index) => (
          <Video
            key={index+1}
            title={video.title}
            username={video.username}
            views={video.views}
            period={video.period}
            userlogo={video.image}
            videoUrl={video.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
