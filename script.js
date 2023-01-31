var images = ["resim1.png", "resim2.png", "resim3.png"];
var i = 0;

function updateImage() {
    document.getElementById("slider").src = "images/" + images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}