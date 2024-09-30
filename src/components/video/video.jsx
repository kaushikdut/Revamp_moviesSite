import { forwardRef, useEffect, useState } from "react";
import { fetchMovieVideos } from "../../api/tmdbApi";
import "./video.css";

const Video = forwardRef(({ id, movie }, ref) => {
  const [videoKey, setVideoKey] = useState();
  useEffect(() => {
    fetchMovieVideos(id).then((res) => {
      const trailer = res.results.find((video) => video.site === "YouTube");
      if (trailer) {
        setVideoKey(trailer.key);
      }
    });
  }, []);

  return (
    <div className="video" ref={ref} id="video">
      <h2>{movie?.title}</h2>
      <div className="video-player-section">
        <div className="video-player">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Movie Trailer"
          />
        </div>
      </div>
    </div>
  );
});

export default Video;
