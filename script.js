var folder = "images/";
var images = ["resim1.png", "resim2.png", "resim3.png","resim4.png","resim5.png","resim6.png","resim7.png"];

function updateImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var path = folder + images[randomIndex];
  document.getElementById("slider").src = path;
}
// Current slide index
let currentSlide = 0;

// Get the current slide index from local storage
if (localStorage.getItem("currentSlide")) {
  currentSlide = parseInt(localStorage.getItem("currentSlide"));
}

// Save the current slide index to local storage
function saveSlide(index) {
  localStorage.setItem("currentSlide", index);
}

// Example usage:

// On page load
document.addEventListener("DOMContentLoaded", function() {
  showSlide(currentSlide);
});

// When moving to the next slide
function nextSlide() {
  saveSlide(currentSlide + 1);
  showSlide(currentSlide + 1);
}

// When moving to the previous slide
function prevSlide() {
  saveSlide(currentSlide - 1);
  showSlide(currentSlide - 1);
}
