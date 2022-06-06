import React from 'react'
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings/build/star-ratings';

function MovieCard(props) {
  return (
      <>
    <div class="col-3 p-2 card text-center">
  <div style={{height:'65px'}} class="card-header bg-dark text-white">
  <h5 class="card-title">{props.title}</h5>
  </div>
  <img style={{height:'400px'}} src={props.posterURL} class="card-img-top"
   alt="img"/>
  <div class="card-body">

    <p class="card-text">{props.description}</p>
  </div>
  <div class="card-footer bg-dark text-muted">
    <StarRatings
          rating={props.rating}
          starRatedColor="gold"
          starDimension="20px"
          // changeRating={this.changeRating}
          numberOfStars={10}
          name='rating'
        />
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
