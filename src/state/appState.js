import {decorate, observable} from 'mobx';
import Genres from './genresState';
import Movies from './moviesState';
import Sort from './sortState';

class ObservableAppStore {

   sort = {...Sort};
   genres = Genres;
   movies = Movies;

}

decorate(ObservableAppStore, {
   sort: observable,
   genres: observable,
   movies: observable
});

export default new ObservableAppStore();
