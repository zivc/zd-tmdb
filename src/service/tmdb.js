import to from '../utils/to';
import objectToQuerystring from '../utils/objectToQuerystring';

class TMDb {

   static IMAGE_PATH = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

   /*
      Usually here I'd use Typescript and make these "private"
      hence the underscore prefix
    */
   _API_KEY = 'ba1a44af5877692c93dfc8983c738a9f';
   _API_HOST = "http://api.themoviedb.org/3/";

   /*
      API is GET only so no need to worry about POST data
    */
   async request(uri = '', params = {}) {
      if (!uri) return await to(Promise.reject('No URI given'));

      const queryString = objectToQuerystring({
         ...params,
         api_key: this._API_KEY
      });
      const url = `${this._API_HOST}${uri}${queryString}`;
      return to(fetch(url));
   }

   async nowPlaying(page = 1) {
      if (page <= 0) page = 1;
      return this.request('movie/now_playing', {page});
   }

   async genres() {
      return this.request('genre/movie/list');
   }

}

export default TMDb;

export const tmdb = new TMDb();
