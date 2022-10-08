import React from 'react'
import MoviesManagerUI from '../components/MoviesManagerUI'

const MoviesManagerPage = () => {

    /*  const getMovies = async () => {
         return get('/api/movies')
     }
  */
    return (
        <MoviesManagerUI /* getMovies={getMovies} */ />
    )
}

export default MoviesManagerPage