import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos}) => {
  const rendered_list = videos.map((video) => {
    return <VideoItem />
  });
  
  return <div>{rendered_list}</div>;
};

export default VideoList;
