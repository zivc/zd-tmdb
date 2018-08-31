import React, {Component} from 'react';
import appState from '../state/appState';
import {observer} from 'mobx-react';
import Genre from "./Genre";

export class Genres extends Component {

   render() {
      return (
         <div>
            <h6>Genres</h6>
            {this.renderGenres()}
            <div className="mt-2">
               <div className="col mb-2">
                  <button className="btn btn-primary btn-sm" onClick={this.selectAllGenres}>Select All</button>
               </div>
               <div className="col">
                  <button className="btn btn-danger btn-sm" onClick={this.selectNoGenres}>Select None</button>
               </div>
            </div>
         </div>
      );
   }

   renderGenres() {
      const {map} = appState.genres;
      return Object.keys(map)
         .sort((a, b) => {
            const an = map[a].name.toLowerCase();
            const bn = map[b].name.toLowerCase();
            return an > bn ? 1 : an < bn ? -1 : 0;
         })
         .map(id => {
            return <Genre key={id} {...map[id]} />
         });
   }

   selectAllGenres() {
      const {genres} = appState;
      Object.keys(genres.map).forEach(id => genres.toggleEnabled(id, true));
   }

   selectNoGenres() {
      const {genres} = appState;
      Object.keys(genres.map).forEach(id => genres.toggleEnabled(id, false));
   }

}

export default observer(Genres);
