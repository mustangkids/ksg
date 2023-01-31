var folder = "images/";
var images = ["resim1.png", "resim2.png", "resim3.png","resim4.png","resim5.png","resim6.png","resim7.png","resim8.png","resim9.png"];

// Current slide index
let currentSlide = 0;

// Get the current slide index from a cookie
if (getCookie("currentSlide")) {
  currentSlide = parseInt(getCookie("currentSlide"));
}

// Save the current slide index to a cookie
function saveSlide(index) {
  setCookie("currentSlide", index, 7);
}

// Get the value of a cookie
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Set a cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Example usage:

// On page load
document.addEventListener("DOMContentLoaded", function() {
  // Load the image without showing it
  var img = new Image();
  img.src = folder + images[currentSlide];

  // Once the image is fully loaded, show it
  img.onload = function() {
    showSlide(currentSlide);
  };
});

// When moving to the next slide
function nextSlide() {
  currentSlide = Math.floor(Math.random() * images.length);
  saveSlide(currentSlide);
  showSlide(currentSlide);
}
