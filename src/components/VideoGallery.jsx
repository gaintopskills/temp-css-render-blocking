import React, { useState } from "react";

const videoData = [
  {
    id: "1",
    title: "Amazing Event Highlights",
    thumbnail: "/events-gallery/cotton-on/20170802_161812.jpg",
    url: "https://www.youtube.com/watch?v=YX7RrMCnVfw",
  },
  {
    id: "2",
    title: "Behind The Scenes",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    id: "3",
    title: "Customer Testimonials",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ",
  },
  {
    id: "4",
    title: "How We Work",
    thumbnail: "https://img.youtube.com/vi/XqZsoesa55w/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/XqZsoesa55w",
  },
];

export const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0].url);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-center mb-8">🎬 Video Gallery</h2>

      {/* Video Player */}
      <div className="w-full max-w-4xl h-64 sm:h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={selectedVideo}
          title="YouTube Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Video Thumbnails */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {videoData.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video.url)}
            className="cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className={`w-40 sm:w-52 h-24 sm:h-32 rounded-lg shadow-md transition-opacity ${
                selectedVideo === video.url ? "opacity-50" : "opacity-100"
              }`}
            />
            <p className="text-sm text-center mt-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
