import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useState } from "react";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [showComments, setShowComments] = useState<boolean>(true);
  return (
    <div className="shadow-lg m-auto ml-20 mt-20 grid grid-cols-12">
      <div className="col-span-8 p-10">
        <iframe
          width={"90%"}
          height={"400px"}
          // height={"40%"}
          src={`https://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="eager"
        ></iframe>
        <div>
          <button
            onClick={() => {
              setShowComments((prev) => !prev);
            }}
          >
            Comment
          </button>
        </div>
        {showComments && <CommentContainer videoId={searchParams.get("v")} />}
      </div>
    </div>
  );
};

export default WatchPage;
