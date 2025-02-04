import React from "react";

const URL_IMDB = 'https://www.imdb.com/title'

const DisplayMovie = ({movie}) => {
    const display = () => {

    }
    return(
        <div className='movie'>
            <div><p>{movie.Year}</p></div>
            <div>
                <a key='' href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank"><img src= {movie.Poster !== 'N/A' ? movie.Poster : movie.Poster = 'https://via.placeholder.com/400'} alt= {movie.Title}/></a>
                {/* <img src= {movie.Poster !== 'N/A' ? movie.Poster : movie.Poster = 'https://via.placeholder.com/400'} alt= {movie.Title}/> */}
            </div>
            <div>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
              {/* <a key='' href='https://www.imdb.com/title/movie.imdbID/' target="_blank"><p>{movie.imdbID}</p></a> */}

              {/* <h2>{movie.imdbID}</h2> */}
            </div>
            
        </div>
    )


}
export default DisplayMovie