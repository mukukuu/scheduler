var dateNow = moment().format('dddd') + " " + moment().format('MMMM Do YYYY');
var timeNow = moment().format('hh:mm a');
var textbox;

var text9 =$('#9am');
var text10 =$('#10am');
var text11 =$('#11am');
var text12 =$('#12pm');
var text1 =+$('#1pm');
var text2 =$('#2pm');
var text3 =$('#3pm');
var text4 =$('#4pm');
var text5 =$('5pm');


//get time and date

var interval = setInterval(function()  {
    var now = moment();
    $("#currentDay").html(now.format('DD MMMM YYYY') 
    + " " + now.format("dddd").substring(0,3) );
    $("#currentDay").html(dateNow + " " + now.format("hh:mm:ss A"));

}, 100);

// track textarea date 

function tracker() {

    var am9 = JSON.parse(localStorage.getItem('9am'));
    text9.val(am9);
}