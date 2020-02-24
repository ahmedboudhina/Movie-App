import React, {Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './movieList'

const inception = {
  id: "joker",
    title: "joker",
    rating: "4",
    image: "https://www.dw.com/image/50340387_303.jpg",
  year: 2019}

const shawshank = {
  id: "venom",
  title: "venom",
  rating: "3",
  image:
    "https://m.media-amazon.com/images/I/81Fm+TEqUhL._SS500_.jpg",
    year: 2018
  }

const whatever = {id: 'Captain America', title: 'Whatever', rating: 2,
image:"https://vignette.wikia.nocookie.net/marvelstudios/images/8/8f/Captain-America-TFA-UK-Poster.jpg/revision/latest?cb=20151124092420&path-prefix=fr", year: 1900}

const moviesToDisplay = [whatever, inception, shawshank]

class MovieApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 1,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }
  
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
        )
      )
  }
  render() {
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter
              })
            }} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </header>
        <main className="movie-app-main">
            <MovieList
              movies={
                this.getVisibleMovies()
              }
              onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />
        </main>
      </div>
    )
  }
}

export default MovieApp;
