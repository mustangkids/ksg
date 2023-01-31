const randomImageBtn = document.querySelector("#randomImageBtn");
const displayedImage = document.querySelector("#displayedImage");
const images = [
  "images/resim1.jpg",
  "images/resim2.jpg",
  "images/resim3.jpg"
];

randomImageBtn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * images.length);
  displayedImage.src = images[randomIndex];
});


// Retrieve the last image index from cookies
var lastImageIndex = getCookie("lastImageIndex");
if (lastImageIndex) {
  i = parseInt(lastImageIndex);
  if (i < 0 || i >= images.length) {
    i = 0;
  }
}

function updateImage(step) {
  i = (i + step + images.length) % images.length;
  var path = folder + images[i];
  document.getElementById("slider").src = path;
  
  // Save the current image index to cookies
  setCookie("lastImageIndex", i, 365);
}

// Read cookie function
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var j = 0; j < ca.length; j++) {
    var c = ca[j];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Write cookie function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
