import React, {Component} from 'react';
import {observer} from 'mobx-react';
import appState from "../state/appState";

export class Genre extends Component {

   constructor(props) {
      super(props);
      this.handleCheck = this.handleCheck.bind(this);
   }

   handleCheck() {
      appState.genres.toggleEnabled(this.props.id);
   }

   render() {
      const {enabled} = this.props;
      return (
         <div>
            <input type="checkbox" checked={enabled} onChange={this.handleCheck}/> {this.props.name}
         </div>
      );
   }
}

export default observer(Genre);
