var folder = "images/";
var images = ["resim1.png", "resim2.png", "resim3.png","resim4.png","resim5.png","resim6.png","resim7.png"];

function updateImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var path = folder + images[randomIndex];
  document.getElementById("slider").src = path;
}
