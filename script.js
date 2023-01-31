var folder = "images/";
var images = ["resim1.png", "resim2.png", "resim3.png"];
var i = 0;

function updateImage() {
  var path = folder + images[i];
  document.getElementById("slider").src = path;
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
