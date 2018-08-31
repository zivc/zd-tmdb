import React, {Component} from 'react';
import TMDb from "../service/tmdb";
import appState from "../state/appState";
import './movie.css';

export class Movie extends Component {

   render() {

      const styles = {
         backgroundImage: `url(${TMDb.IMAGE_PATH}${this.props.poster_path})`
      };

      return (
         <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
            <div className="movie-card" style={styles}>
               <div className="movie-text">
                  <h5 className="text-white font-weight-bold p-1">{this.props.title} </h5>
                  <ul className="list-group list-group-flush">
                     {this.props.genre_ids.map(genreId => {
                        return (
                           <li key={genreId}
                               className="list-group-item bg-transparent p-1 m-0">{appState.genres.map[genreId].name}</li>
                        )
                     })}
                  </ul>
                  <p className="h5 text-white p-1 m-0">{this.props.vote_average} / 10 {this.bitOfFun()}</p>
               </div>
            </div>
         </div>
      );
   }

   bitOfFun() {
      /*
         Return an emoji based on the rating
       */
      const {vote_average} = this.props;
      if (vote_average >= 8) return '🙌';
      if (vote_average >= 6) return '👌';
      if (vote_average >= 4) return '👍';
      if (vote_average >= 2) return '😬';
      return '🙈';
   }
}

export default Movie;
