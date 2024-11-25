const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const today = new Date();
// console.log(today.getDate());
const weekDays = ["Sunday","Monday","tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonth = ["January","February","March", "April","May", "June", "July","August","September","October","November","December"];

date.innerText = (today.getDate()<10?"0":"")+today.getDate();
day.innerText = weekDays[today.getDay()];
month.innerText = allMonth[today.getMonth()];
year.innerText = today.getFullYear();