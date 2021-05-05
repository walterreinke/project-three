//Get the button:
mybutton = document.getElementById("myBtn2");
mybutton2 = document.getElementById("myBtn1");

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
    mybutton2.style.display = "block";
  } else {
    mybutton.style.display = "none";
    mybutton2.style.display = "none";
  }
}

function next() {
  // get the slide with the active class
  let slide = document.querySelector(".active");
  console.log(slide);
  console.log(slide.nextElementSibling);
  document.querySelector(".active").nextElementSibling.scrollIntoView(true);
}

function previous() {
  // get the slide with the active class
  document.querySelector(".active").previousElementSibling.scrollIntoView(true);
}
