import { forwardRef, useEffect, useState } from "react";
import "./video.css";
import { fetchMovieVideos } from "../../api/tmdbApi";

const Video = forwardRef(({ id }, ref) => {
  const [videoKey, setVideoKey] = useState();
  useEffect(() => {
    fetchMovieVideos(id).then((res) => {
      console.log(res);
      const trailer = res.results.find((video) => video.site === "YouTube");
      if (trailer) {
        setVideoKey(trailer.key);
      }
    });
  }, []);

  return (
    <div className="video" ref={ref} id="video">
      Video
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoKey}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie Trailer"
      />
    </div>
  );
});

export default Video;
