/////// Cookie starts//////////


const cookieStorage = {
  getItem: (item) => {
      const cookies = document.cookie
          .split(';')
          .map(cookie => cookie.split('='))
          .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[item];
  },
  setItem: (item, value) => {
      document.cookie = `${item}=${value};`
  }
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

  const acceptFn = event => {
      saveToStorage(storageType);
      consentPopup.classList.add('hidden');
  }
  const consentPopup = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('accept');
  acceptBtn.addEventListener('click', acceptFn);

  if (shouldShowPopup(storageType)) {
      setTimeout(() => {
          consentPopup.classList.remove('hidden');
      }, 2000);
  }

};


////// Cookie ends ///////



///// Navbar starts /////

const navbar = document.getElementById('navbar')

// OnScroll event handler
const onScroll = () => {

// Get scroll value
const scroll = document.documentElement.scrollTop

// If scroll value is more than 0 - add class
if (scroll > 0) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled")
}
}

// Use either onScroll or throttledOnScroll
window.addEventListener('scroll', onScroll)

///// navbar ends /////




///// Slider starts /////

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
clearTimeout(timer);
showSlides(slideIndex += n);
}

function currentSlide(n) {
clearTimeout(timer);
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n==undefined){n = ++slideIndex}
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
timer = setTimeout(showSlides, 8000); /* 8 seconds */
}

///// slider ends /////




///// Contact us starts /////


// Group all fields into an object
var fields = {};

// Linking all the fields to our fields object
document.addEventListener("DOMContentLoaded", function() {
fields.firstName = document.getElementById('firstName');
fields.lastName = document.getElementById('lastName');
fields.email = document.getElementById('email');
fields.message = document.getElementById('message');
})

// Checking that the field is not empty 
function isNotEmpty(value) {
if (value == null || typeof value == 'undefined' ) return false;
return (value.length > 0);
}

// Check if a string is an email
function isEmail(email) {
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return regex.test(String(email).toLowerCase());
}

// Field validation function

var error_message = document.getElementById("error_message");
function fieldValidation(field, validationFunction) {
if (field == null) return false;

let isFieldValid = validationFunction(field.value)
if (!isFieldValid) {
// field.className = 'placeholderRed';
text = "Please Enter valid Email and Message";
display_message.innerHTML = text;


} else {
field.className = '';
}

return isFieldValid;
}


// combine all the checks for email and message

function isValid() {
var valid = true;

valid &= fieldValidation(fields.email, isEmail);
valid &= fieldValidation(fields.message, isNotEmpty);

return valid;
}


// User class constructor
class User {
constructor(firstName, lastName, email, message) {
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.message = message;
}
}

//Sending the contact form data with JavaScript
function sendContact() {
if (isValid()){
    let usr = new User(email.value, message.value);

        // alert("Thanks for your message.")
        text = "Thanks for your message.";
        display_message.innerHTML = text;



} else {
        // alert("Fill your email and message fields, please")
        // field.className = 'placeholderRed';
        text = "Please Enter valid Email and Message";
        display_message.innerHTML = text;

}    
}


///// Contact us ends /////





///// AjaxCalls starts /////

    //Button 1
    document.getElementById("load-1").onclick = function(){

      var request;
  
      if(window.XMLHttpRequest){
        request = new XMLHttpRequest();
      }
      else {
        request = new  ActiveXObject("Microsoft.XMLHTTP");
      }
  
      request.open('GET', 'json/tab1.json');
  
      request.onreadystatechange = function(){
        if((request.readyState === 4) && (request.status === 200)){
          
          var items = JSON.parse(request.responseText);
                  console.log(items);
          
                  var output = "";
  
                  for(var key in items){
                  output +=  items[key].content;
                  document.getElementById('load-1').style.background = "black";
                  document.getElementById('load-1').style.color = "white";
                  document.getElementById('load-2').style.background = "#bbbbbb";
                  document.getElementById('load-2').style.color = "black";
                  document.getElementById('load-3').style.background = "#bbbbbb";
                  document.getElementById('load-3').style.color = "black";
                  document.getElementById('load-1').innerHTML = '❮ Vestibolum at odio sit amet ❯';
                  document.getElementById('load-2').innerHTML = 'Sed vehicula neque';
                  document.getElementById('load-3').innerHTML = 'Nulla id libero pretium';
                  
                  }
                  
                  document.getElementById("update").innerHTML = output;
        }
      };
  
      request.send();
  
      }
      
  
  
          
      //Button 2
      document.getElementById("load-2").onclick = function(){
  
          var request;
  
          if(window.XMLHttpRequest){
              request = new XMLHttpRequest();
          }
          else {
              request = new  ActiveXObject("Microsoft.XMLHTTP");
          }
  
  
          request.open('GET', 'json/tab2.json');
  
          request.onreadystatechange = function(){
              if((request.readyState === 4) && (request.status === 200)){
          
                  var items = JSON.parse(request.responseText);
                  console.log(items);
          
                  var output = "";
  
                  for(var key in items){
                  output +=  items[key].content;
                  document.getElementById('load-1').style.background = "#bbbbbb";
                  document.getElementById('load-1').style.color = "black";
                  document.getElementById('load-2').style.background = "black";
                  document.getElementById('load-2').style.color = "white";
                  document.getElementById('load-3').style.background = "#bbbbbb";
                  document.getElementById('load-3').style.color = "black";
                  document.getElementById('load-1').innerHTML = 'Vestibolum at odio sit amet';
                  document.getElementById('load-2').innerHTML = '❮ Sed vehicula neque ❯';
                  document.getElementById('load-3').innerHTML = 'Nulla id libero pretium';

                  }

                  document.getElementById("update").innerHTML = output;
  
              }
          };
  
          request.send();
  
      }
  
  
  
  
      //Button 3
      document.getElementById("load-3").onclick = function(){
  
          var request;
  
          if(window.XMLHttpRequest){
              request = new XMLHttpRequest();
          }
          else {
              request = new  ActiveXObject("Microsoft.XMLHTTP");
          }
  
  
          request.open('GET', 'json/tab3.json');
  
          request.onreadystatechange = function(){
              if((request.readyState === 4) && (request.status === 200)){
          
                  var items = JSON.parse(request.responseText);
                  console.log(items);
          
                  var output = "";
  
                  for(var key in items){
                  output +=  items[key].content;
                  document.getElementById('load-1').style.background = "#bbbbbb";
                  document.getElementById('load-1').style.color = "black";
                  document.getElementById('load-2').style.background = "#bbbbbb";
                  document.getElementById('load-2').style.color = "black";
                  document.getElementById('load-3').style.background = "black";
                  document.getElementById('load-3').style.color = "white";
                  document.getElementById('load-1').innerHTML = 'Vestibolum at odio sit amet';
                  document.getElementById('load-2').innerHTML = 'Sed vehicula neque';
                  document.getElementById('load-3').innerHTML = '❮ Nulla id libero pretium ❯';
                  
                  }
        
                  document.getElementById("update").innerHTML = output;
  
              }
          };
  
          request.send();
  
      }



///// AjaxCalls ends /////

    
