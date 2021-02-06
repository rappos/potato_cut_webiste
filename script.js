function changeImage() {
  var Image_Id = document.getElementById("theImage");
  if (Image_Id.src.match("./images/first-frame.webp")) {
    Image_Id.src = "./videos/film.gif";
  } else {
    Image_Id.src = "./images/first-frame.webp";
  }
}
