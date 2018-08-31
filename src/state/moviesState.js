import {tmdb} from "../service/tmdb";
import appState from "./appState";

const movies = {

   fetching: false,
   ascSort: {
      truthy: 1,
      falsy: -1
   },
   descSort: {
      truthy: -1,
      falsy: 1
   },

   _list: [],

   get list() {
      const {_list, fetching} = this;
      if (!_list.length && !fetching) {
         this.fetching = true;
         this.fetchMovies();
      }
      return _list;
   },

   sort(movieA, movieB) {
      const {truthy, falsy} = movies[`${appState.sort.direction}Sort`];
      const {property} = appState.sort;
      return movieA[property] > movieB[property] ? truthy :
         movieA[property] < movieB[property] ? falsy : 0;
   },

   async fetchMovies() {
      const {_list} = this;
      const [err, response] = await tmdb.nowPlaying();
      if (err) {
         // do something;
      }

      _list.length = 0;
      _list.push(...response.results);
   }

};

export default movies;
