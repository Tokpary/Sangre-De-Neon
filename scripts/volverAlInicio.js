
var mybutton = document.getElementById("myBtn");
var scrollDiv = document.getElementById("background-image-container");

scrollDiv.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (scrollDiv.scrollTop > 20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  scrollDiv.scrollTop = 0;
  scrollDiv.scrollTop = 0;
}
