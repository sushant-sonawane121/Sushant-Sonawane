document.addEventListener("click", function () {
    const barsIcon = document.querySelector(".bars");
    const nav = document.querySelector("nav");
  
    barsIcon.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  });
  