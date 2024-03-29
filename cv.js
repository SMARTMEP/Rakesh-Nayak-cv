// Get all the toggle button elements
var toggleBtnEls = document.querySelectorAll(".toggle-btn");

// Add event listeners to each toggle button element
toggleBtnEls.forEach(function(toggleBtnEl) {
  toggleBtnEl.addEventListener("click", function() {
    // Get the corresponding content elements and toggle their visibility
    var contentEls = toggleBtnEl.parentNode.querySelectorAll("p, h2 ,h5,h6");
    contentEls.forEach(function(contentEl) {
      contentEl.style.display = (contentEl.style.display === "none") ? "block" : "none";
    });
  });
});


/* IMAGE SLIDER */
const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prev = slider.querySelector('.prev');
const next = slider.querySelector('.next');
let index = 0;
const slidesCount = slides.children.length;

next.addEventListener('click', () => {
  index++;
  if (index > slidesCount - 1) {
    index = 0;
  }
  slides.style.transform = `translateX(-${index * 20}%)`;
});

prev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = slidesCount - 1;
  }
  slides.style.transform = `translateX(-${index * 20}%)`;
});


   