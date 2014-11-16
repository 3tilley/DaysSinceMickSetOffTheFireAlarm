
var lastDate = alarms[0];
var currentDate = Date.now();
var noOfDays = currentDate.getDay() - lastDate.getDay();

console.log("Last Date: " + lastDate);
confirm.log("Current Date: " + currentDate);
console.log(noOfDays);

$("#noOfDays").text(noOfDays);