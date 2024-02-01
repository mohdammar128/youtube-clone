import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useState } from "react";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [showComments,setShowComments]=useState<boolean>(false);
  return (
    <div className="shadow-lg m-auto">
      <iframe
        width="800px"
        height="450px"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="eager"
      ></iframe>
      <div>
        <button onClick={()=>{
          setShowComments(prev=>!prev)
        }}>Comment</button>
      </div>
      {showComments && <CommentContainer videoId={searchParams.get("v")}/>}
    </div>
  );
};

export default WatchPage;
