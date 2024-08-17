import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface MyComponentProps {
  videoId: string;
}

const YouTubePlayer: React.FC<MyComponentProps> = (videoId) => {
  //   const videoId = "GT9ShGE_qjg";

  const opts: YouTubeProps["opts"] = {
    height: "380",
    width: "380",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo(); // Pause video when ready
  };

  console.log("videoId", videoId);

  return (
    <div className="youtube-player border-2 border-dashed border-red-500 rounded-md">
      <YouTube videoId={videoId?.videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubePlayer;
