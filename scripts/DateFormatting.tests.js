var date1=new Date("October 13, 2014 11:13:00");
 var date1String="October 13, 2014 11:13 AM";
 var date1Test=DateFormatter.getLongDateTime(date1);
 
 console.log(date1);
  console.log(date1String);
   console.log(date1Test);
 valueTester(date1Test,date1String);
 
// "October 13, 2014 11:13:00"
 
  var date1=new Date("October 13, 2014 11:13:00");
 var date1String="October 13, 2014 11:13 AM";
 var date1Test=DateFormatter.getLongDateTime(date1);
 
 console.log(date1);
  console.log(date1String);
   console.log(date1Test);
 valueTester(date1Test,date1String);
 
 
 
 function valueTester(dateInput,stringInput){
	 
	 if(dateInput === stringInput) {
	 console.log("Success");
	 }
	 
	 try { 
	 if(dateInput !== stringInput) throw "Date Inputs do not match";
           }
    catch(err) {
		console.log(err);
	}
  }
	 
   
  console.log("--------------------- "); 
   
  
   //getShortTime Method Test 
   //Example: "4:20 PM", "3:00 AM"
   
    console.log("Method 1");
console.log("--------------------- ");
   
   var m1Date1=new Date("October 13, 2014 11:13:00");
 var m1Date1String="11:13 AM";
 var m1Date1Test=DateFormatter.getShortTime(m1Date1);
 
 console.log(m1Date2);
 console.log(m1Date1Test);
  console.log(m1Date1String);
 valueTester(m1Date1Test,m1Date1Test);
 
 
 
 var m1Date2=new Date("March 25, 2018 20:55:00");
 var m1Date2String="8:55 PM";
 var m1Date2Test=DateFormatter.getShortTime(m1Date2);
  
  console.log(m1Date2);
 console.log(m1Date2String);
  console.log(m1Date2Test);
 valueTester(m1Date2Test,m1Date2String);
   
   //getLongTime Method Test
   //Example: "4:20:20 PM", "3:00:33 AM"
    console.log("Method 2");
console.log("--------------------- ");
   
 var m2Date1=new Date("October 13, 2014 11:13:00");
 var m2Date1String="11:13:00 AM";
 var m2Date1Test=DateFormatter.getLongTime(date1);
 
 console.log(m2Date1);
 console.log(m2Date1String);
  console.log(m2Date1Test);
 valueTester(m2Date1Test,m2Date1String);
 
 
 
 var m2Date2=new Date("March 25, 2018 20:55:00");
 var m2Date2String="8:55:00 PM";
 var m2Date2Test=DateFormatter.getLongTime(m2Date2);
 
 console.log(m2Date2);
 console.log(m2Date2String);
  console.log(m2Date2Test);
 valueTester(m2Date2Test,m2Date2String);


//getShortDate Method Test
//Example: "1/20/2017", "10/15/2017"
console.log("Method 3");
console.log("--------------------- ");
   
 var m3Date1=new Date("October 13, 2014 11:13:00");
 var m3Date1String="10/13/2014";
 var m3Date1Test=DateFormatter.getShortDate(m3Date1);
 
 console.log(m3Date1);
 console.log(m3Date1String);
  console.log(m3Date1Test);
 valueTester(m3Date1Test,m3Date1String);
 
 
 
 var m3Date2=new Date("March 25, 2018 20:55:00");
 var m3Date2String="3/25/2018";
 var m3Date2Test=DateFormatter.getShortDate(m3Date2);
 
 console.log(m3Date2);
 console.log(m3Date2String);
  console.log(m3Date2Test);
 valueTester(m3Date2Test,m3Date2String);

//getLongDate Method Test
//Example: "January 20, 2017", "October 15, 2017"
console.log("Method 4");
console.log("--------------------- ");
   
 var m4Date1=new Date("October 13, 2014 11:13:00");
 var m4Date1String="October 13, 2014";
 var m4Date1Test=DateFormatter.getLongDate(m4Date1);
 
 console.log(m4Date1);
 console.log(m4Date1String);
  console.log(m4Date1Test);
 valueTester(m4Date1Test,m4Date1String);
 
 
 
 var m4Date2=new Date("March 25, 2018 20:55:00");
 var m4Date2String="March 25, 2018";
 var m4Date2Test=DateFormatter.getLongDate(m4Date2);
 
 console.log(m4Date2);
 console.log(m4Date2String);
  console.log(m4Date2Test);
 valueTester(m4Date2Test,m4Date2String);

//getShortDateTime Method Test
//Example: '1/20/2017 4:20 PM', '10/15/2017 3:00 AM'
console.log("Method 5");
console.log("--------------------- ");
   
 var m5Date1=new Date("October 13, 2014 11:13:00");
 var m5Date1String="10/13/2014 11:13 AM";
 var m5Date1Test=DateFormatter.getShortDateTime(m5Date1);
 
 console.log(m5Date1);
 console.log(m5Date1String);
  console.log(m5Date1Test);
 valueTester(m5Date1Test,m5Date1String);
 
 
 
 var m5Date2=new Date("March 25, 2018 20:55:00");
 var m5Date2String="3/25/2018 8:55 PM";
 var m5Date2Test=DateFormatter.getShortDateTime(m5Date2);
 
 console.log(m5Date2);
 console.log(m5Date2String);
  console.log(m5Date2Test);
 valueTester(m5Date2Test,m5Date2String);


//getLongDateTime Method Test
//Example: "January 20, 2017 4:20 PM", "October 15, 2017 3:00 AM"
console.log("Method 6");
console.log("--------------------- ");
   
 var m6Date1=new Date("October 13, 2014 11:13:00");
 var m6Date1String="October 13, 2014 11:13 AM";
 var m6Date1Test=DateFormatter.getLongDateTime(m6Date1);
 
 console.log(m6Date1);
 console.log(m6Date1String);
  console.log(m5Date1Test);
 valueTester(m6Date1Test,m6Date1String);
 
 
 
 var m6Date2=new Date("March 25, 2018 20:55:00");
 var m6Date2String="March 25, 2018 8:55 PM";
 var m6Date2Test=DateFormatter.getLongDateTime(m6Date2);
 
 console.log(m6Date2);
 console.log(m6Date2String);
  console.log(m6Date2Test);
 valueTester(m6Date2Test,m6Date2String);

// getExtendedDateTime Test 
//Example: "Friday, January 20, 2017 4:20 PM", "Sunday, October 15, 2017 3:00 AM"	

console.log("Method 7");
console.log("--------------------- ");
   
 var m7Date1=new Date("October 13, 2014 11:13:00");
 var m7Date1String="Monday, October 13, 2014 11:13 AM";
 var m7Date1Test=DateFormatter.getExtendedDateTime(m7Date1);
 
 console.log(m7Date1);
 console.log(m7Date1String);
  console.log(m7Date1Test);
 valueTester(m7Date1Test,m7Date1String);
 
 
 
 var m7Date2=new Date("March 25, 2018 20:55:00");
 var m7Date2String="Sunday, March 25, 2018 8:55 PM";
 var m7Date2Test=DateFormatter.getExtendedDateTime(m7Date2);
 
 console.log(m7Date2);
 console.log(m7Date2String);
  console.log(m7Date2Test);
 valueTester(m7Date2Test,m7Date2String);


