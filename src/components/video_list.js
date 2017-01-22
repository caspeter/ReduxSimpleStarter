import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (prop) => {
  const videoItems = prop.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={prop.onVideoSelect}
        key={video.etag}
        video={video}
       />
  );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
