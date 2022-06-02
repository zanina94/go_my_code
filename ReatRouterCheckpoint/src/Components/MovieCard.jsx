import React from 'react'
import PropTypes from 'prop-types';

function MovieCard(props) {

  var cardBody;
  if(props.showTrailer === false)
  cardBody =<img src={props.posterURL} class="card-img-top" alt="img"/>;
  else{
  cardBody = <video width="320" height="240" controls>
             <source src={props.trailerURL} type='video/mp4'/>
             </video>;
             }

  return (
      <>
    <div style={{height:'1150px'}} class="row card text-center">
  <div class="card-header">
  <h5 class="card-title">{props.title}</h5>
  </div>
  {cardBody}
  <div class="card-body">

    <p class="card-text">{props.description}</p>
  </div>
  <div class="card-footer text-muted">
    {props.rating}/10
  </div>
</div>
{/* <Routes>


<Route path="movie/:title" element={<MovieCard title={props.title} description={props.description}
                                    trailerURL={props.trailerURL} rating={props.rating} 
                                    showTrailer={true}/>} />

</Routes> */}
</>
  )
  }


MovieCard.defaultProps={
    title : "Title",
    description : "description",
    posterURL : "posterURL",
    trailerURL : "trailerURL",
    rating : 5,
    showTrailer : false
   }
   
   MovieCard.propTypes={ 
       title: PropTypes.string.isRequired,   
       description: PropTypes.string.isRequired,
       posterURL: PropTypes.string.isRequired,
      //  rating : PropTypes.oneOf(...1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
       showTrailer : PropTypes.bool.isRequired
   }
  
export default MovieCard
