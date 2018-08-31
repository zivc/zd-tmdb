import React, {Component} from 'react';
import Controls from "./components/Controls";
import Movies from "./components/Movies";

class App extends Component {

   render() {
      return (
         <div className="zd-app container mt-5">
            <div className="row">
               <div className="col-lg-3 col-md-4 col-sm-5 alert alert-dark">
                  <Controls/>
               </div>
               <div className="col">
                  <Movies/>
               </div>
            </div>
         </div>
      );
   }

}

export default App;
