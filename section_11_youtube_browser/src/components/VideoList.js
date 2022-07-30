import React from 'react';
import VideoItem from './VideoItem';


const VideoList = ({videos, onVideoSelect}) => {
  const rendered_list = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect} 
        video={video} />
    )
  });

  return <div className="ui relaxed divided list">{rendered_list}</div>;
};

export default VideoList;
