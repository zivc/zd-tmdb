import React, {Component} from 'react';
import appState from "../state/appState";

export class Sorting extends Component {
   render() {
      return (
         <div className="mb-4">
            <h6>Sorting</h6>
            <div className="row">
               <div className="col-6">
                  <select defaultValue={appState.sort.property} onChange={this.handleChange('property')}>
                     {appState.sort.properties.map(prop => {
                        const {key, name} = prop;
                        return (
                           <option key={key} value={key}>{name}</option>
                        );
                     })}
                  </select>
               </div>
               <div className="col-6">
                  <select defaultValue={appState.sort.direction} onChange={this.handleChange('direction')}>
                     {appState.sort.directions.map(prop => {
                        const {key, name} = prop;
                        return (
                           <option key={key} value={key}>{name}</option>
                        );
                     })}
                  </select>
               </div>
            </div>
         </div>
      );
   }

   handleChange(key) {
      return function (event) {
         appState.sort[key] = event.target.value;
      }
   }

}

export default Sorting;
