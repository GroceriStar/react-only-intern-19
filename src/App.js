import React, { Component } from 'react';
import DayOfWeek from './DayOfWeek';
import DayAndMonth from './DayAndMonth';
import Calendar from './Calendar';
import './App.css';


class App extends Component {
  render(){
    return ( <div>
    <DayOfWeek/>
    <Calendar/>
  </div>
  );
  }
}


export default App;
