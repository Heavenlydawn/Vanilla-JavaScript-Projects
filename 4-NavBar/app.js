// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Methods used - (classList add remove contains toggle)

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //  console.log(links.classList)
  // console.log(links.classList.contains("links")) - result - true
  // console.log(links.classList.contains("random")) - result - false

  // The classList property returns or shows all the classes the element has
  // The contains method shows a particular class the element has

  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }

  // The toggle method allows us to use just one line of code - it takes a class and returns either the add or remove method
  // links.classList.toggle("show-links")
});
