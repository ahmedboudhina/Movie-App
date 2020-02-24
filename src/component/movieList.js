import React from 'react'
import MovieCard from './movieCard'

const MovieList = ({movies = [], onAddMovie = () => {}}) => (
     <div className="movie-list">
        {
            movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <div
            className="new-movie-card"
            onClick={() => {
                onAddMovie({
                    id: Math.random(),
                    title: prompt('movie title: '),
                    rating: Number(prompt('movie rating: ')),
                    year: Number(prompt('movie year: '))
                })
            }} >
            +
        </div>
      </div>
)

export default MovieList