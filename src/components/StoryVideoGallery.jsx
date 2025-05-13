import React, { useState } from "react";
import "../assets/storyvideogallery.css";

const videos = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  src: `/images/sumervideo-${i + 1}.MP4`,
}));

const StoryVideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleClose = () => {
    setActiveVideo(null);
  };

  return (
    <div className="story-gallery">
      <div className="story-circles">
        {videos.map((video) => (
          <div
            className="story-circle"
            key={video.id}
            onClick={() => setActiveVideo(video)}
          >
            <div className="story-inner">
              <video
                className="story-preview"
                src={video.src}
                muted
                preload="auto"
              />
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="story-overlay" onClick={handleClose}>
          <video
            className="story-video"
            src={activeVideo.src}
            autoPlay
            controls
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default StoryVideoGallery;
