//loader
var loader=document.getElementById('loader');
setTimeout(() => {
    loader.classList.add('none');
}, 2500);

// mood

var mood=document.getElementById('moodIcon');
mood.onclick=()=>{
    document.body.classList.toggle('darkmood');
   
    let moodIcon=document.getElementById('moodIcon');
    if(document.body.classList.contains('darkmood')){
        
      
        moodIcon.src='../Images/sun.svg';
        
    }
    else{
      
        moodIcon.src='../Images/moon.svg';
    }
}

//navBar 
topbtn=document.getElementById('topbtn');
topbtn.classList.add('none');
window.addEventListener("scroll",function(event){
    var scroll=this.scrollY;
    if(scroll > 250){
 var nav=document.getElementById('nav');
 nav.classList.add('nav1fix');
 topbtn.classList.remove('none');
 
    }
    if(scroll < 250){
        var nav=document.getElementById('nav');
        nav.classList.remove('nav1fix');
        topbtn.classList.add('none');  
    }

    if(scroll>50){
      var smallnav=document.getElementById('smallNav');
     smallnav.style.backgroundColor='var(--dark)';
     smallnav.style.boxShadow='var(--shadow)';
    }
    if(scroll<50){
      var smallnav=document.getElementById('smallNav');
      smallnav.style.backgroundColor='transparent';
    }
});


//small nav

var service=document.getElementById('services1');
var sub1=document.getElementById('sub11');
var sub2=document.getElementById('sub22');

var c=0;
service.onclick=()=>{
  
  if(c==0){
    sub1.style.display=' inline-block';
    c++;
  }
  else{
    sub1.style.display='none';
    c--;
  }
   
}


var list=document.getElementById('list');
var Tlist=document.getElementById('Tlist');
var menu=document.getElementById('menu-item2')
Tlist.classList.add('none');


list.onclick=()=>{
  
    menu.classList.add('inline-block');
    list.classList.add('none');
    Tlist.classList.remove('none');
  

  
}
Tlist.onclick=()=>{
 
    menu.classList.remove('inline-block');
    list.classList.remove('none');
    Tlist.classList.add('none');
  
 
  
}


 //email validation 

 function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  // Validation function for the name
function validateName(name) {
  // Use a regular expression to check if the name contains only letters
  var nameRegex = /^[a-zA-Z ]+$/;
  return nameRegex.test(name);
}

// Validation function for the phone number
function validatePhone(phoneNumber) {
  // Use a regular expression to check if the phone number contains only digits
  var phoneRegex = /^\d+$/;
  return phoneRegex.test(phoneNumber);
}
   

//  var formEmailSubmit=document.getElementById('submit').onclick=()=>{
    
//  }

 //form data

 
 document.getElementById('contact-form').addEventListener('submit', function(event) {

  
  event.preventDefault(); // Prevent the default form submission

  var formEmail = document.getElementById('formEmail').value;
  var formName = document.getElementById('formName').value;
  var formPhone = document.getElementById('formPhone').value;
 var isValidEmail= validateEmail(formEmail);
 var isValidName= validateName(formName);
 var isValidPhone= validatePhone(formPhone);
if (isValidEmail && isValidName && isValidPhone) {
console.log("Valid");

// Get form data
var formData = new FormData(this);

// Send data to the server using Fetch API
fetch('https://script.google.com/macros/s/AKfycbyiN5VArSQE8DzoK4m5pe0igUo8pNInt9-OKHp4QydQTn7N51-Yf7_5dfflM9-DS1ujLQ/exec', {
  method: 'POST',
  body: formData
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
})
.then(data => {
  // Handle the response from the server if needed
  Swal.fire({
    icon: "success",
    title: "Done",
    text: "Thank You!",
   
  });;
  document.getElementById('contact-form').reset();
})
.catch(error => {
  // Handle errors
  console.error('Error:', error);
});
} 

else if(!isValidEmail){
  Swal.fire({
    icon: "error",
    title: "Wrong Email",
    text: "Enter Valid Email Address!",
   
  });;

}
else if(!isValidName){
  Swal.fire({
    icon: "error",
    title: "Wrong Name",
    text: "Enter Valid Name!",
   
  });;
  }
  else if(!isValidPhone){
    Swal.fire({
      icon: "error",
      title: "Wrong Phone Number",
      text: "Enter Valid Phone Number!",
     
    });;
    
    }

  
});