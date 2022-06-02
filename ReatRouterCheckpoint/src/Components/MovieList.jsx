import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MovieCard  from './MovieCard'
import ListOfMovies from '../ListOfMovies';
import Filter from './Filter';
import {BrowserRouter as Router,Routes, Route, Link, useNavigate} from 'react-router-dom'

function MovieList(props) {
  const navigate = useNavigate();
  const[showMovies,setShowMovies]= useState(true)
  const goBack=()=>{
    navigate(-1);
    setShowMovies(true);
  }
 const handleClick=(index)=>{
   debugger; 
   setShowMovies(false);
   navigate (`/movie/${index}`);

// 
 }

 var i =0;
  return (
      <>
      {/* <Filter/> */}
    {showMovies && <div class="row">
       {ListOfMovies.map((e,index)=>{
         i++
         return (
             <div class="col-4">
               <h2 style={{cursor:'pointer'}} className='text-center' onClick= {()=>handleClick(index)}>Movie {i}</h2>
         <MovieCard  title={e.title} description={e.description} posterURL={e.posterURL}
                    trailerURL={e.trailerURL} rating={e.rating} showTrailer={e.showTrailer}/>
                    {/* <h1  onClick= {()=>navigate(`movie/${index}`)}>movie{i}</h1> */}
         </div>
       );})}
      </div>}
    
      <Routes>

                {ListOfMovies.map((movie,i)=>
         <Route path={`movie/${i}`} element={<MovieCard title={movie.title} description={movie.description}
                                                  trailerURL={movie.trailerURL} rating={movie.rating} 
                                                  showTrailer={true}/>} />
        )
        } 
       </Routes> 
        
      </>
      
);
}


export default MovieList
