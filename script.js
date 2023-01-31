var folder = "images/";
var images = ["resim1.png", "resim2.png", "resim3.png","resim4.png","resim5.png","resim6.png","resim7.png"];
var i = 0;

// En son kaldığınız resmi çerezlerden alın
var lastImage = getCookie("lastImage");
if (lastImage) {
  i = images.indexOf(lastImage);
  if (i == -1 || i >= images.length) {
    i = 0;
  }
}

function updateImage() {
  var path = folder + images[i];
  document.getElementById("slider").src = path;
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  
  // En son kaldığınız resmi çerezlere kaydedin
  setCookie("lastImage", images[i], 365);
}

// Çerez okuma fonksiyonu
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

// Çerez yazma fonksiyonu
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
