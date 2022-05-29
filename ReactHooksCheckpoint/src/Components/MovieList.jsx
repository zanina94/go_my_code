import React from 'react'
import PropTypes from 'prop-types'
import MovieCard  from './MovieCard'
import ListOfMovies from '../ListOfMovies';
import Filter from './Filter';

function MovieList(props) {

var i =0;
  return (
      <>
      {/* <Filter/> */}
    <div class="row">
       {ListOfMovies.map((e)=>{
         return (
             <>
         <MovieCard title={e.title} rating={e.rating} description={e.description} posterURL={e.posterURL}/>
         </>
       );})}
      </div>
      </>
);
}

MovieList.propTypes = {}

export default MovieList
