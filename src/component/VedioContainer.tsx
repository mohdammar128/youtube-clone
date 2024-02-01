import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../data/constants";
import VideoCard from "./VideoCard";
import { YouTubeVideo } from "../data/apiInterface";
import { Link } from "react-router-dom";
import HomePageShimmer from "./HomePageShimmer";

const VedioContainer = () => {
  const [video, setVideo] = useState<YouTubeVideo[]>([]);
  const [isLoaded,setIsLoaded]=useState<boolean>(false);

  useEffect(() => {
    fectchVideo();
  }, []);

  const fectchVideo = async () => {
    try {
      const respons = await fetch(YOUTUBE_VIDEO_API);
      const result = await respons.json();
      if(result){
        setIsLoaded(true);
      }
      setVideo(result.items);
    } catch (error) {
      console.error(error);
    }
  };
  return isLoaded ? (
    <div className="w-fit flex  flex-wrap  ">
      {video.map((obj: YouTubeVideo, index: number) => (
        <Link key={index} to={`/watch?v=${obj.id}`}>
          <VideoCard info={obj} />
        </Link>
      ))}
    </div>
  ) : (
    <HomePageShimmer />
  );
};

export default VedioContainer;
