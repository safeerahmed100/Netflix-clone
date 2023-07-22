import React, { useEffect, useState } from "react";
import './Banner.css';
import axios from "./axios";
import requests from "./request";

function Banner(props){
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();

    },
    []);

function truncate(string,n){
    if(string && string.length > n){
        return string.substr(0,n-1) + "....."
    }
else{
    return string;
}
}
   return(
    <div className="bg_banner">
     <header className="banner"
     style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      } }>

        <div className="banner_content">
            <h1 className="title">
                {movie?.title || movie?.name || movie?.orignal_name}</h1>
            <div className="banner_btns">
            <button className="content_btn">Watch Now</button>
            <button className="content_btn">My List</button>
            </div>
            <p className="desc">{truncate(movie?.overview,150)}
            </p>
        </div>
        <div className="bannerfade" style={{
            height:"9.8rem",
            backgroundImage:"linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)",
        }}/>

    </header>
    </div>
)}

export default Banner;