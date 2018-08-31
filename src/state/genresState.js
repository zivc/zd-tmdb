import {tmdb} from "../service/tmdb";

const genres = {

   fetching: false,

   _map: {},

   get map() {
      const {_map, fetching} = this;
      if (!Object.keys(_map).length && !fetching) {
         this.fetching = true;
         this.fetchGenres();
      }
      return _map;
   },

   toggleEnabled(id, val) {
      const genre = this._map[id];
      genre.enabled = typeof val !== "undefined" ? val : !genre.enabled;
   },

   async fetchGenres() {
      const [err, response] = await tmdb.genres();
      if (err) {
         //do something;
      }

      const genres = response.genres.reduce((genres, genre) => {
         const {name, id} = genre;
         genres[id] = {
            id,
            name,
            enabled: false
         };
         return genres;
      }, {});

      this._map = genres;
      return genres;
   }

};

export default genres;
