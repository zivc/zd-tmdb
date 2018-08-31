import React, {Component} from 'react';
import {observer} from 'mobx-react';
import appState from "../state/appState";

export class Rating extends Component {

   constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
   }

   render() {
      return (
         <div className="mb-4">
            <h6>Minimum Rating</h6>
            <div className="row">
               <div className="col-7">
                  <input style={{width: '100%'}} type="range" min="0" max="10" step="0.5"
                         value={appState.sort.minRating} onChange={this.handleChange}/>
               </div>
               <div className="col">
                  {appState.sort.minRating} / 10
               </div>
            </div>
         </div>
      );
   }

   handleChange(event) {
      appState.sort.minRating = event.target.value;
   }

}

export default observer(Rating);
