import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Card from './Card';
import requests from './request';


function App() {
  return(
  
    <div>
      
    <Navbar />
    <Banner />
    <Card title="Netflix Orignals"
    fetchUrl={requests.fetchNetflixOrignals}
    isLargeRow />
<Card title="Trending Now" fetchUrl={requests.fetchTrending} />
<Card title="Top Rated" fetchUrl={requests.fetchTopRated} />
<Card title="Action Movies" fetchUrl={requests.fetchActionMovies} />
<Card title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
<Card title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
<Card title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
<Card title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

     
    
    </div>

  )
}

export default App;
