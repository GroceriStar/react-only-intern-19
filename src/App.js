import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getDayName(number){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }

  getMonthName(number){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[number];
  }


  render() {

    // Get Current Day
    let dateObject = new Date();
    let today = dateObject.getDay();
    let month = dateObject.getMonth();
    let date = dateObject.getDate();

    // If Weekend
    if(today === 6 || today === 0)
      return ( <div class = "Mid">
               <div> Today is {date} of {this.getMonthName(month)}, {this.getDayName(today)} </div>
               <div>You can watch TV all day today!</div>

             </div>
             );
      else {
        return ( <div class = "NMid">
                <div> Today is {date} of {this.getMonthName(month)}, {this.getDayName(today)} </div>
                 <div>You should go to work today!</div>
               </div>
               );
      }
  }
}

export default App;
