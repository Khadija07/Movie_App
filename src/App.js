import {useEffect, useState} from 'react';
import './App.css'
import IconSearch from './search.svg'
import DisplayMovie from './component/DisplayMovie';

//API KEY = 3cad549

const movie1 = {
  Poster: "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" ,
  Title: "The Man in the Iron Mask" ,
  Type: "movie" ,
  Year: "1998",
  imdbID: "tt0120744"
}

const URL = 'http://www.omdbapi.com?apikey=3cad549' ;

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [movie , setMovie] = useState([])

  const search = async (titleMovie) => {
    const response = await fetch(`${URL}&s=${titleMovie}`)
    const data = await response.json()
    setMovie(data.Search)

    console.log(data.Search)
  }



  return (
    <div className='app'><h1>World of Movies</h1>

    <div className='search'>
      <input placeholder='Enter movie names'
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          search(searchValue); //search function when Enter is pressed
        }
      }}
      />

      <img
      src={IconSearch}
      alt = "search"
      onClick={() => search(searchValue)}
      />
    </div>
    {
      movie?.length > 0 ? (<div className='container'>
      {movie.map((movie, index) => (<DisplayMovie key = {index} movie = {movie}/>))}
      </div>) : (
        <div className='empty'>
          <h3>No searches found</h3>
        </div>
      )
    }

    
    
    </div>
  )
}

export default App;
