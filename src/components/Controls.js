import React, {Component} from 'react';
import Genres from "./Genres";
import Rating from "./Rating";
import Sorting from "./Sorting";

class Controls extends Component {

   render() {
      return (
         <div>
            <Sorting/>
            <Rating/>
            <Genres/>
         </div>
      );
   }

}

export default Controls;
