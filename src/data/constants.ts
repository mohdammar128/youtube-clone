const GOOGLE_API_KEY: string = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;

// Authorization: Bearer[YOUR_ACCESS_TOKEN];
// Accept: application / json;
export const COMMENTS_API: string =
  `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=[VIDEO_ID]&key=${GOOGLE_API_KEY}`;
