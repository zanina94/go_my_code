import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MovieList from './MovieList'
import ListOfMovies from '../ListOfMovies';
import AddMovie from './AddMovie';

function Filter(props) {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [isShow, setIsShow] = useState(false)
    
    var filteredMovies = ListOfMovies.filter(movie=> movie.title.toLowerCase().includes(title) && movie.rating >= rating)


  let body;
  if (isShow){
  body = <MovieList movies={filteredMovies} />
   }
    else{
   body = <AddMovie/>
    }
   return (
      <>
    <div class="bg-dark">
        <div class="row text-light fw-bold p-4">       
         <div class="col-4">
          <label for="title" class="form-label">TITLE</label>
          <input type="text" value={title} class="form-control " id="title" placeholder="title" onChange={e => setTitle(e.target.value)}/>
        </div>
        <div class="col-4">
          <label for="rating" class="form-label">RATING</label>
          <input type="number" value={rating} class="form-control d-flex justify-content-center" id="rating" onChange={e => setRating(e.target.value)}/>
        </div>
        <div class="col-2 d-flex justify-content-end mt-3 pt-3">
        <button  onClick={()=>setIsShow(false)} class="btn btn-outline-success fw-bold" id="filter">ADD MOVIE</button>
        </div>
        <div class="col-2 mt-3 pt-3">
        <button  onClick={()=>setIsShow(true)} class="btn btn-outline-info fw-bold" id="filter">SHOW MOVIES</button>
        </div> 

          
       </div>
    </div>
    {body}
    </>
  )
}

Filter.propTypes = {}

export default Filter
