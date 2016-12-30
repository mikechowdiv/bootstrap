// Query Form validation

function chk_valid()
{



var   
      destination = $('#destination'),
      departure_date = $("#Date"),
      departure_month = $("#Month"),
      departure_year = $("#Year"),
      len_of_trip = $('#len_of_trip'),
      no_of_adult = $("#no_of_adult"),
      no_of_child = $("#no_of_child"),
      fname=$('#fname'),
      lname=$('#lname'),
      phoneno = $("#phone_no"),
      mobno=$('#mob_no'),
      city=$('#city'),
      zip = $("#zip"),
      country = $("#country"),
      email1=$('#e_mail1'),
      email2=$('#e_mail2'),
      only_numeric = /^([0-9]{0,})$/,
      only_text = /^([A-Za-z]{0,})$/,
      chk_mob = /^([0-9]{10,20})$/,
      chk_email = /^([A-Za-z0-9])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/,
      counter=0;


$(".validate").css("display","none");
$(".validate").removeClass();




if(destination.val()=="0")
{

var msg="Please Select your destination";
destination.focus();
$(".Select_destination span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;
return false;
}
else
{
}

if(departure_date.val() =="0" || departure_month.val() =="0" || departure_year.val() =="0")
{
var msg="Please Select your Departure Date";
departure_date.focus();
$(".Departure_date span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 



if(!only_numeric.test(no_of_adult.val()))
{
var msg="Please enter Valid No.of Adult";
no_of_adult.focus();
$(".no_of_adult span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 



if(!only_numeric.test(no_of_child.val()))
{
var msg="Please enter Valid No.of Child";
no_of_child.focus();
$(".no_of_child span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 


if(!only_numeric.test(len_of_trip.val()))
{
var msg="Please enter Valid Length Of your trip";
len_of_trip.focus();
$(".Length_of_trip span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 




if(fname.val() == "")
{

var msg="Please enter First name";

fname.focus();
$(".First_name span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;
return false;
}


else
{
if(!only_text.test(fname.val()))
{
var msg="Please enter Valid First Name";
fname.focus();
$(".First_name span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;
return false;
}
else
{
 
} 
}

if(lname.val() == "")
{

var msg="Please enter Last name";

lname.focus();
$(".Last_name span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;

return false;

}

else
{
if(!only_text.test(lname.val()))
{

var msg="Please enter Valid Last Name";
lname.focus();
$(".Last_name span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;

return false;
}
else
{
  
} 
}


if(!only_numeric.test(phoneno.val()))
{
var msg="Please enter Valid Phone No.";
phoneno.focus();
$(".Phone_no_container span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 


if(!only_numeric.test(mobno.val()))
{
var msg="Please enter Valid Mobile Number";
mobno.focus();
$(".Mobno span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 


if(!only_text.test(city.val()))
{
var msg="Please enter Valid City Name";
city.focus();
$(".CityName span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 



if(!only_numeric.test(zip.val()))
{
var msg="Please enter Valid Zip Code";
zip.focus();
$(".ZIP_no span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 




if(!only_text.test(country.val()))
{
var msg="Please enter Valid Country Name";
country.focus();
$(".CountryName span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);

counter++;
return false;
}
else
{
  
} 




if(email1.val() == "")
{

var msg="Please enter E-mail ID";

email1.focus();
$(".Email1 span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;
return false;
}


else
{
if(!chk_email.test(email1.val()))
{
var msg="Please enter Valid Email ID";
email1.focus();
$(".Email1 span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;
return false;
}
else
{
 
} 
}


if(email2.val() =="")
{
 
}
else
{
if(!chk_email.test(email2.val()))
{
var msg="Please enter Valid Email ID";
email2.focus();
$(".Email2 span").addClass("validate");
$(".validate").css("display","block");
$(".validate").text(msg);
counter++;
return false;
}
else
{
 
} 

}





if(counter>0)
{
 
return false;
}
else
{
window.alert("Data Saved Successfully"); 
return true;
 
}

}

$("#fname").click(function()
{
  $(".validate").css("display","none");
$(".validate").removeClass();
});

$("select").change(function()
{
   $(".validate").css("display","none");
$(".validate").removeClass();
});
// $("#lname").click(function()
// {
//   $(".Last_name span").css("display","none");
//   $(".Last_name span").removeClass("validate");
// });



// End of Form Validation
