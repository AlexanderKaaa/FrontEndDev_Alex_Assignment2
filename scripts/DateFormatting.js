var DateFormatter={
	
//getShortTime - returns a the date's time with hours, minutes and AM or PM
//Example: "4:20 PM", "3:00 AM"

getShortTime: function(input){
	var shortTime;
	shortTime=input.toLocaleTimeString();
  shortTime=shortTime.substr(0,shortTime.lastIndexOf(":"))+ shortTime.substr(shortTime.lastIndexOf(":")+3,shortTime.length-1)
  
  //console.log(shortTime);
	return shortTime;
},

//getLongTime - returns a the date's time with hours, minutes, seconds and AM or PM
//Example: "4:20:20 PM", "3:00:33 AM"
getLongTime: function(input){
var longTime=input.toLocaleTimeString();
return longTime;
	
},
//getShortDate - returns the date in the following format month/day/year
//Example: "1/20/2017", "10/15/2017"
getShortDate: function(input){
	var shortDate=input.toLocaleDateString();
  return shortDate;
},
//getLongDate - returns the date in the following format Month Day, Year
//Example: "January 20, 2017", "October 15, 2017"
getLongDate: function(input){
var tempDay=input.getDate();
var tempYear=input.getFullYear();
var tempMonth=input.getMonth();

var ArrayMonthList=["January","February","March","April","May","June","July","August","September","October","November","December"]

var LongDate=ArrayMonthList[tempMonth]+" "+tempDay + ", " + tempYear;
return LongDate;
	
},
//getShortDateTime - returns the date in the following format month/day/year hour:minutes AM|PM -Example: '1/20/2017 4:20 PM', '10/15/2017 3:00 AM'
getShortDateTime: function(input){
	
  	var ShortDateTime=this.getShortDate(input) + " " +this.getShortTime(input) ;
  return ShortDateTime;
},
//getLongDateTime - returns the date in the following format- Month Day, Year hour:minutes AM|PM
//Example: "January 20, 2017 4:20 PM", "October 15, 2017 3:00 AM"
getLongDateTime: function(input){
var LongDateTime=this.getLongDate(input)+" "+this.getShortTime(input) ;
return LongDateTime;

	
},
//getExtendedDateTime - returns the date in the following format- Day of the week, Month Day, Year hour:minutes AM|PM*/
//Example: "Friday, January 20, 2017 4:20 PM", "Sunday, October 15, 2017 3:00 AM"	
getExtendedDateTime: function(input){
	var tempWeek=input.getDay();
  var tempArrayWeekDays=["Sunday","Monday","Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
  var ExtendedDateTime= tempArrayWeekDays[tempWeek]+", "+this.getLongDateTime(input);
  return ExtendedDateTime;
},
		
};
var cDate=new Date();
console.log(DateFormatter.getShortTime(cDate));
console.log(DateFormatter.getLongTime(cDate));
console.log(DateFormatter.getShortDate(cDate));
console.log(DateFormatter.getLongDate(cDate));
console.log(DateFormatter.getShortDateTime(cDate));
console.log(DateFormatter.getLongDateTime(cDate));
console.log(DateFormatter.getExtendedDateTime(cDate));
