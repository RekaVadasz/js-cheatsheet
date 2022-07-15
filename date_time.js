// ----------- get current date as string (yyyy-mm-dd)------------

const currentDate = function (){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
       dd = '0' + dd;
    }
    if (mm < 10) {
       mm = '0' + mm;
    } 
    return yyyy + '-' + mm + '-' + dd;
}

//console.log(currentDate())


//---------- return date and time as string (e.g. Thu Jun 09 2022 14:25:19) ------------

const currentDate2 = function (){
   // get a new date (locale machine date time)
   let date = new Date();
   console.log(date)
   
   // get the date as a string
   let day = date.toDateString();
   console.log(day)
   
   // get the time as a string
   let time = date.toLocaleTimeString();
   console.log(time)
   return day + " " + time; //returns a string: Thu Jun 09 2022 14:25:19 
}

//console.log(currentDate2())



// ----------- get current date as string with hours and mins (yyyy-mm-dd hh:mi)------------

const currentDate3 = function (){
   let today = new Date();
   
   let dd = today.getDate();
   let mm = today.getMonth() + 1; //January is 0!
   let yyyy = today.getFullYear();

   let hh = today.getHours();
   let mi = today.getMinutes()

   if (dd < 10) {
      dd = '0' + dd;
   }
   if (mm < 10) {
      mm = '0' + mm;
   } 
   if (hh < 10) {
      hh = '0' + hh;
   }
   if (mi < 10) {
      mi = '0' + mi
   }

   return yyyy + '-' + mm + '-' + dd + ' '+ hh + ':'+ mi;
}

console.log(currentDate3())


//------ get current day of the week --------

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

console.log(day)