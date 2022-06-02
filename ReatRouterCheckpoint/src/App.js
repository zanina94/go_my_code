import logo from './logo.svg';
import './App.css';
import MovieCard  from './Components/MovieCard';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import isShow from './Components/Filter'
import AddMovie from './Components/AddMovie';

function App() {
  return (

    <>
  <Filter/>
  {/* <MovieCard title="Resident Evil: Welcome to Raccoon City" showTrial={true}/> */}
   </>    
  );
}

export default App;
