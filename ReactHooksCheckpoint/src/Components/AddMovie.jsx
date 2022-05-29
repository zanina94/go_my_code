import React, { useState } from 'react'
import ListOfMovies from '../ListOfMovies';
export default function AddMovie() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("")
    const [rating, setRating] = useState(0);

const handleSubmit = (e) =>{
    console.log(ListOfMovies);
    e.preventDefault();
    var movie = {
        title : title,
        description : description,
        posterURL : posterURL,
        rating : rating
    };
    ListOfMovies.push(movie)
    
}

  return (
      <div style={{width:'50%'}} class="container-fluid mt-4 fw-bold">
    <form class="m-2 col-12 ">
       <div class="col-12 mb-3">
         <label for="title" class="form-label">TITLE</label>
         <input type="text" class="form-control" id="title" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
       </div>
      <div class=" col-12 mb-3">
         <label for="description" class="form-label">DESCRIPTION</label>
         <textarea placeholder='Description' class="form-control" id="description" rows="3" onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <div class="col-12 mb-3">
         <label for="posterURL" class="form-label">IMAGE</label>
         <input type="text" class="form-control" id="posterURL" placeholder="Poster URL" onChange={e => setPosterURL(e.target.value)}/>
       </div>
       <div class="col-12 mb-3">
         <label for="rating" class="form-label">RATING</label>
         <input placeholder='1' type="number" class="form-control" id="rating" onChange={e => setRating(e.target.value)}/>
       </div>
       <button onClick={handleSubmit} class="btn btn-primary fw-bold float-end" id="addMovie">SUBMIT</button>
    </form>

    </div>
  )
}
