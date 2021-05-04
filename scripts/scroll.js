//Get the button:
mybutton = document.getElementById("myBtn1");
mybutton = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function next() {
  // get the slide with the active class
  //   document.querySelector(".active").nextSibling.scrollIntoView(true);

  var element = document.querySelector(".active").nextSibling;
  element.scrollIntoView();
}

function previous() {
  // get the slide with the active class
  document.querySelector(".active").previousSibling.scrollIntoView(true);
}
