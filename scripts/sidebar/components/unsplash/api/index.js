const toJson = response => response.json();

const normalize = video => {
  console.log(video);
  return {
    id: video.id.videoId,
    thumbnails: video.snippet.thumbnails,
    title: video.snippet.title,
    thumbnailLink: video.snippet.thumbnails.medium.url,
    description: video.snippet.description,
    channelTitle: video.snippet.channelTitle
  };
};
export const all = (page = 1) =>
  window
    .fetch(
      `https://www.googleapis.com/youtube/v3/search?type=video&maxResults=18&part=snippet&key=${google_api_key}`
    )
    .then(toJson)
    .then(videos =>  videos.items.map( normalize ) ); 

export const search = (search, page = 1) =>
  window
  .fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${search}&type=video&maxResults=18&part=snippet&key=${google_api_key}`
    )
    .then(toJson)
    .then(videos =>  videos.items.map( normalize ) ); 
