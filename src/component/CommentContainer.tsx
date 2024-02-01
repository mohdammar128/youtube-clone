import { useEffect, useState } from "react";
// import { CommentInterface } from "../data/apiInterface";
import { COMMENTS_API } from "../data/constants";
import { CommentInterface, Snippet2 } from "../data/commentInterface";
import { Snippet } from "../data/apiInterface";
type Props = {
  videoId: string | null;
};
type MessageProps = {
  snnipet2?: Snippet2;
};
const CommentContainer = ({ videoId }: Props) => {
  const [items, setItems] = useState<CommentInterface[]>([]);
  useEffect(() => {
    fetchComments();
  }, []);
  const fetchComments = async (): Promise<void> => {
    const response = await fetch(COMMENTS_API.replace("[VIDEO_ID]", videoId!));
    const result = await response.json();
    setItems(result.items);
  };

  return (
    <div className="flex  flex-col gap-y-8">
      {items !== undefined && items.length > 0 ? (
        items.map((singleComment: CommentInterface, index: number) => (
          <SingleComment
            key={index}
            snnipet2={singleComment?.snippet?.topLevelComment?.snippet}
          />
        ))
      ) : (
        <div>No Comments</div>
      )}
    </div>
  );
};

export default CommentContainer;

interface Comments {
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}
const SingleComment = ({ snnipet2 }: MessageProps) => {
  const { textOriginal, authorDisplayName, authorProfileImageUrl }: Comments =
    snnipet2!;
  console.log(textOriginal, authorDisplayName, authorProfileImageUrl);
  return (
    <div>
      <ul className="flex gap-3">
        <img src={authorProfileImageUrl} alt="" className="rounded-full scale-75"/>
        <div className="">
          <h2 className="font-semibold">{authorDisplayName}</h2>
          <li>{textOriginal}</li>
        </div>
      </ul>
    </div>
  );
};
