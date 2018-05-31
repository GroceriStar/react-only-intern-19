import React, { Component } from 'react';


class Calendar extends Component {


  getCal(num){
  let Cal = [
    { val: 0,
      name : "January",
      dates :  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    },
    { val: 1,
      name : "February",
      dates : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
    },
    { val: 2,
      name: "March",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    { val: 3,
      name: "April",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    },
    { val: 4,
      name: "May",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    { val: 5,
      name: "June",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    },
    { val: 6,
      name: "July",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    { val: 7,
      name: "August",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    { val: 8,
      name: "September",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    },
    { val: 9,
      name: "October",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    },
    { val: 10,
      name: "November",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    },
    { val: 11,
      name: "December",
      dates: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    }
  ];

//For in Loop to Find Value
  /*for (var key in Cal) {
  if(num == key)
  return [key, Cal.name, Cal.dates];
  */

// Object Properties
for (let value of Object.values(Cal)) {
  if(num == value) {
  //return(Object.entries(Cal)[num]);
  document.write(Object.values(Cal));
  //return(Object.values(Cal).toString());
}
}
//document.write(Object.entries(Cal)[num]);
}


  render() {
    let dateObject = new Date();
    let today = dateObject.getDay();
    let month = dateObject.getMonth();
    let date = dateObject.getDate();

    return (
      <div>
       <div> <br/> Today is {date} of the month {this.getCal(month)} </div>
      </div>
    );
  }
}

export default Calendar;
