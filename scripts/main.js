var todayDate= new Date();
console.log(todayDate);
document.getElementById("todaysDate").innerHTML=DateFormatter.getLongDate(todayDate);


var dayCheesePizza=new Date("September 5, 2017 11:13:00");
document.getElementById("cheesePizzaDay").innerHTML=DateFormatter.getShortDate(dayCheesePizza);
console.log(dayCheesePizza);
var dayNationalPeanutDay=new Date("September 13, 2017 11:13:00");
document.getElementById("natioanlPeanutDay").innerHTML=DateFormatter.getShortDate(dayNationalPeanutDay);
console.log(dayNationalPeanutDay);
var dayHobbit=new Date("September 22, 2017 11:13:00");
document.getElementById("hobbitDay").innerHTML=DateFormatter.getShortDate(dayHobbit);
console.log(dayHobbit);
var dayNationalComicBook=new Date("September 25, 2017 11:13:00");
document.getElementById("nationalComicBookDay").innerHTML=DateFormatter.getShortDate(dayNationalComicBook);
console.log(dayNationalComicBook);

