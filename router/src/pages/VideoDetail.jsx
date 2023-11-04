import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { videoId } = useParams(); //router 만들때 정해진 id
  return (
    <div>
      VideoDetail {videoId}
    </div>
  );
}

