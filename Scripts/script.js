
  const barsIcon = document.querySelector(".bars");
  const sideHeader = document.querySelector(".side-header");
  const xMarkIcon = document.querySelector(".x-bars");

  // Toggle side header visibility when bars icon is clicked
  barsIcon.addEventListener("click", function () {
    console.log("bars clicked");
    sideHeader.classList.add("active");
  });

  // Close side header when x mark icon is clicked
  xMarkIcon.addEventListener("click", function () {
    sideHeader.classList.remove("active");
  });

  //   // Close side header when a link is clicked
  const sideHeaderLinks = document.querySelectorAll(".side-jeader-nav ul li a");
  sideHeaderLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sideHeader.classList.remove("active");
    });
  });


// Close side header on outside click
document.addEventListener("click", function (event) {
  const sideHeader = document.querySelector(".side-header");
  if (sideHeader.contains(event.target)) {
    sideHeader.classList.remove("active");
  }
});
