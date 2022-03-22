setInterval(showTime, 1000);
var currentTime=0
var currentsec=0
function showTime() {
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

am_pm = "AM";

if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
}
if (hour == 0) {s
    hr = 12;
    am_pm = "AM";
}

hour = hour < 10 ? "0" + hour : hour;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

 currentTime = hour + ":"+ min  ;
 currentsec = sec +" - "+ am_pm ;

document.getElementById("clock").innerHTML = currentTime;
document.getElementById("sec").innerHTML=currentsec;
 
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var curWeekDay = days[time.getDay()];
var curDay = time.getDate();
var curMonth = months[time.getMonth()];
var curYear = time.getFullYear();
var date = curDay+" "+curMonth+" "+curYear+", "+curWeekDay;
document.getElementById("date").innerHTML = date;
}
showTime();

