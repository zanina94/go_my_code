import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MovieList from './MovieList'
import ListOfMovies from '../ListOfMovies';
import AddMovie from './AddMovie';


function Filter(props) {
    const [title, SetTitle] = useState(ListOfMovies[2].title);
    const [rating, setRating] = useState(ListOfMovies[2].rating);
    const [isShow, setIsShow] = useState(false)
    
    const handleClick = (e) => {
      debugger
      e.preventDefault();
      var l = ListOfMovies.filter(movie=> movie.title === title && movie.rating === rating)
      ListOfMovies = l;
    }
  let button ;
  let body;
  if (isShow){
  button = <button  onClick={()=>setIsShow(false)} class="btn btn-outline-success fw-bold" id="filter">ADD MOVIE</button>;
  body = <MovieList/>
   }
    else{
   button = <button  onClick={()=>setIsShow(true)} class="btn btn-outline-info fw-bold" id="filter">SHOW MOVIES</button>;
   body = <AddMovie/>
    }
   return (
      <>
    <div class="bg-dark">
        <div class="row text-light fw-bold p-4">       
         <div class="col-4">
          <label for="title" class="form-label">TITLE</label>
          <input type="text" value={title} class="form-control" id="title" placeholder="title" onChange={e => SetTitle(e.target.value)}/>
        </div>
        <div class="col-4">
          <label for="rating" class="form-label">RATING</label>
          <input type="number" value={rating} class="form-control" id="rating" onChange={e => setRating(e.target.value)}/>
        </div>
        <div class="col-1 ms-3 mt-3 pt-3">
          <button  onClick={()=> handleClick}  class="btn btn-outline-light fw-bold" id="filter">FILTER</button>
        </div>
        <div class="col-2 ps-0 mt-3 pt-3">
          {button}
        </div> 

          
       </div>
    </div>
    {body}
 
    </>
  )
}

Filter.propTypes = {}

export default Filter
