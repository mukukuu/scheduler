
const clock = document.getElementById('')
/* get textarea input */
var textInput =document.querySelector("textarea");
/* get time from rows */
var rowTime = document.querySelector(".hour");
/* get save-btn */
var savBtn = document.querySelector(".sbtn");

/* put current date and time on top of the page */
var dateNow = moment().format('dddd') + " " + moment().format('MMMM Do YYYY');
var timeNow = moment().format('hh:mm a');

/* time interval */
var interval = setInterval(function()  {
    var now = moment();
    $("#currentDay").html(now.format('DD MMMM YYYY') 
    + " " + now.format("dddd").substring(0,3) );
    $("#currentDay").html(dateNow + " " + now.format("hh:mm:ss A"));
}, 100);


/* time tracking rows */
function rowcolor () {
    var rowclock = moment().hours();
   $(".inputF").each(function() {
      var currRowTime = parseInt($(this).data("hour"));
      console.log(currRowTime);

       if (currRowTime > rowclock) {
           $(this).addClass("future");
       } else if (currRowTime === rowclock) {
           $(this).addClass("present");
       } else {
           $(this).addClass("past");
       }
   })
};

$('.sbtn').click(function (e) {
    e.preventDefault();

    var id = $(this).siblings(".hour").text().trim();
    console.log(id);
    let task = {
        hour: id,
        text: $(this).siblings(".input-group").children("textarea").val()
    };
    console.log(task);
    localStorage.setItem(task.hour, task.text);
});

//load data back from localstorage
$("#row1").val(localStorage.getItem("9am"))
$("#row2").val(localStorage.getItem("10am"))
$("#row3").val(localStorage.getItem("11am"))
$("#row4").val(localStorage.getItem("12pm"))
$("#row5").val(localStorage.getItem("1pm"))
$("#row6").val(localStorage.getItem("2pm"))
$("#row7").val(localStorage.getItem("3pm"))
$("#row8").val(localStorage.getItem("4pm"))
$("#row9").val(localStorage.getItem("5pm"))

//call rowcolor to show time
rowcolor();

