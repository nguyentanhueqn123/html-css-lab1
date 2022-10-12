// Bài 1
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick() {
  btn.textContent = 'SUBMIT clicked';
});

// Bai 4
function ageCalculator() {  
  var userinput = document.getElementById("DOB").value;  
  var dob = new Date(userinput);  
  if(userinput == null || userinput == '') {  
      document.getElementById("message").innerHTML = "Choose a date please!";    
      return false;   
  } 
  else {  
  var month_diff = Date.now() - dob.getTime();  
  var age_dt = new Date(month_diff);   
  var year = age_dt.getUTCFullYear();  
  var age = Math.abs(year - 1970);  
  return document.getElementById("result").innerHTML = `Age is: ${age} years`;  
  }  
}  

// Bai 5
var bold_Items;
window.onload = getBold_items();
 
function getBold_items() {
  bold_Items = document.getElementsByTagName('strong'); 
}
function highlight() {
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "red";
    }
}

function return_normal(){
  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}


