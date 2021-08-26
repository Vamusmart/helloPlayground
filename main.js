
/////// Cookie starts//////////

const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = ()=>{
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");

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

        alert("Thanks for your message.")
        text = "Thanks for your message.";
        display_message.innerHTML = text;

} else {
        alert("Fill your email and message fields, please")
        // field.className = 'placeholderRed';
        text = "Please Enter valid Email and Message";
        display_message.innerHTML = text;
}    
}


///// Contact us ends /////

