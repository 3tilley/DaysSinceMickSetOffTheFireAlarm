
$(function () {
    var lastDate = alarms[0];
    var currentDate = new Date();

    console.log(alarms);

    console.log("Last Date: " + lastDate.getTime());
    console.log("Current Date: " + currentDate.getTime());
    console.log(noOfDays);

    var msPerDay = 1000 * 60 * 60 * 24;
    var noOfDays = Math.round((currentDate.getTime() - lastDate.getTime()) / msPerDay);

    console.log("Last Date: " + lastDate);
    console.log("Current Date: " + currentDate);
    console.log(noOfDays);

    $("#noOfDays").text(noOfDays);

});