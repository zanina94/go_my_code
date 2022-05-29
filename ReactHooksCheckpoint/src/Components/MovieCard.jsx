import React from 'react'
import PropTypes from 'prop-types';

function MovieCard(props) {
  return (
      <>
    <div class="col-4 p-2 card text-center">
  <div class="card-header">
  <h5 class="card-title">{props.title}</h5>
  </div>
  <img src={props.posterURL} class="card-img-top"
   alt="img"/>
  <div class="card-body">

    <p class="card-text">{props.description}</p>
  </div>
  <div class="card-footer text-muted">
    {props.rating}/10
  </div>
</div>
</>
  )
}

MovieCard.defaultProps={
    title : "Title",
    description : "description",
    posterURL : "posterURL",
    rating : 5
   }
   
   MovieCard.propTypes={ 
       title: PropTypes.string.isRequired,   
       description: PropTypes.string.isRequired,
       posterURL: PropTypes.string.isRequired,
      // rating : PropTypes.oneOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
   }
export default MovieCard
