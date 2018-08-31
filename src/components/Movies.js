import React, {Component} from 'react';
import Movie from "./Movie";
import {observer} from 'mobx-react';
import appState from "../state/appState";

export class Movies extends Component {

   constructor() {
      super();
      this.filterMovie = this.filterMovie.bind(this);
   }

   mustHaveGenres = [];

   render() {
      return (
         <div className="row">
            {this.renderMovies()}
         </div>
      );
   }

   renderMovies() {
      const {list, sort} = appState.movies;

      // Update local mustHaveGenres to contain the currently selected genre filters
      this.mustHaveGenres = Object.values(appState.genres.map).filter(genre => genre.enabled).map(genre => genre.id);

      // Return filtered and sorted Movie components
      return list
         .filter(this.filterMovie)
         .sort(sort)
         .map(movie => {
            const props = movie;
            return (<Movie key={movie.id} {...props} />)
         });

   }

   filterMovie(movie) {
      const {minRating} = appState.sort;

      // If it doesnt meet our minimum rating, return false
      if (movie.vote_average < minRating) return false;

      // If there are no genre filters, return movie
      if (!this.mustHaveGenres.length) return movie;

      // Make sure that every genre filter matches this movie
      const movieGenres = movie.genre_ids;
      return this.mustHaveGenres.every(genreId => movieGenres.indexOf(genreId) !== -1);
   }

}

export default observer(Movies);
