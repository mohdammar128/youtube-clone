export interface Thumbnails {
  default: { url: string; width: number; height: number };
  medium: { url: string; width: number; height: number };
  high: { url: string; width: number; height: number };
  // Add more thumbnail sizes if needed
}

export interface Snippet {
  publishedAt?: string;
  channelTitle?: string;
  title?: string;
  description?: string;
  thumbnails?: Thumbnails;
  // Add more properties from the 'snippet' object if needed
}

export interface ContentDetails {
  duration?: string;
  dimension?: string;
  definition?: string;
  caption?: string;
  licensedContent?: boolean;
  // Add more properties from the 'contentDetails' object if needed
}

export interface Statistics {
  viewCount?: string;
  likeCount?: string;
  favoriteCount?: string;
  commentCount?: string;
}

export interface YouTubeVideo {
  kind?: string;
  etag?: string;
  id: string;
  snippet: Snippet;
  contentDetails?: ContentDetails;
  statistics: Statistics;
  // Add more properties if needed
}



