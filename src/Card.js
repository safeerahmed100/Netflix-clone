import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './Card.css'

function Card({title,fetchUrl,isLargeRow = false}) {
const basicurl="https://api.themoviedb.org/3";
const movie_url="https://image.tmdb.org/t/p/original/"
    const [movie ,setMovie] = useState([])

    useEffect(()=>{
async function fetchData(){
    const request = await axios.get(basicurl + fetchUrl)
    setMovie(request.data.results)
    return request;
}

fetchData()
    },[basicurl,fetchUrl])

      return (
        <div className='card'>
        <h2>{title}</h2>
        <div className="row_posters">
{movie.map((movie) => (

        <img 
        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
        key={movie.id}
        src={`${movie_url}${ isLargeRow? movie.poster_path : movie.backdrop_path}`}
         alt={movie.name}/>
    )
        )}
        </div>
        </div>
    )
    };

export default Card