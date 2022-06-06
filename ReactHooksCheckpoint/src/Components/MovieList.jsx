import React from 'react'
import PropTypes from 'prop-types'
import MovieCard  from './MovieCard'
import ListOfMovies from '../ListOfMovies';
import Filter from './Filter';
import { auto } from '@popperjs/core';

function MovieList(props) {

var i =0;
  return (
      <>
      {/* <Filter/> */}
    <div style={{gap:'12px',margin:auto}} class="d-flex row  mt-3 justify-content-center">
       {props.movies.map((e)=>{
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
