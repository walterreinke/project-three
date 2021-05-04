// this is say that once 25% of the section enters the screen, the effect will take place
let options = {
  root: null,
  threshold: 0.15,
};

function intersectionHandler(entries, observer) {
  // if it is intersecting
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // adds active if it is intersecting
      entry.target.classList.add("active");

      let color = entry.target.dataset.color;
      document.body.style.backgroundColor = color;
    } else {
      // removes active if it is no longer intersecting
      entry.target.classList.remove("active");
    }
  });
}

let observer = new IntersectionObserver(intersectionHandler, options);
// let is the same thing as creating a var

// need to get reference to all of the sections
let sections = document.querySelectorAll("section");
// let images = document.querySelectorAll("img");

// loop through all the sections, and tell the observer to observe each one
// for (let i = 0; i < sections.length; i++) {}, this is the ugly way to do the same thing as below

sections.forEach((section) => {
  observer.observe(section);
});

// images.forEach((image) => {
//   observer.observe(image);
// });
