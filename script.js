function changeImage() {
  var Image_Id = document.getElementById("theImage");
  if (Image_Id.src.match("./images/first-frame.png")) {
    Image_Id.src = "./videos/film.gif";
  } else {
    Image_Id.src = "./images/first-frame.png";
  }
}
