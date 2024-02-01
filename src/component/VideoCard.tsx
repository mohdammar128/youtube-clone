
import { YouTubeVideo, Snippet, Statistics } from "../data/apiInterface";

type Props = {
  info: YouTubeVideo;
};


const VideoCard = ({ info }: Props) => {
  const { snippet, statistics } =
    info ??{};
//   const channelId = snippet.channelId;
//   const title = snippet.title;
//   const thumbnail = snippet.thumbnails;
  const { channelTitle, title, thumbnails } = snippet ?? {};




  return <div className="m-2 p-5 w-72 shadow-lg rounded-sm ">
    <img className="rounded-lg" src={thumbnails?.medium.url} width={thumbnails?.medium.width} height={thumbnails?.medium.height} alt="video" />
    <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {/* <li>{statistics.viewCount}</li> */}
    </ul>
  </div>;
};

export default VideoCard;
