import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constatnts/constants";
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [UrlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err=>{

    })
  }, [props.url]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) =>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("array is empty");
      }
    })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => {
          return (
            <div>
              <img
              onClick={()=>{
                handleMovie(movie.id)
              }}
                className={props.isSmall ? "smallPoster" : "poster"}
                alt="poster"
                src={`${imageUrl + movie.backdrop_path}`}
              />
              <h1 className={!props.isSmall ? "name" : "smallName"}>
                {props.isSmall ? movie.title : movie.name}
              </h1>
            </div>
          );
        })}
      </div>
        { UrlId && <Youtube opts={opts} videoId={UrlId.key}/> }
    </div>
  );
}

export default RowPost;
