let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let slidesWrapper = document.querySelector('.slides-wrapper');

  
    if (!slidesWrapper) {
      console.error("Slides wrapper not found!");
      return;
    }

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  
    let slideWidth = slidesWrapper.clientWidth;
    let translateValue = -slideIndex * slideWidth;
    
    slidesWrapper.style.transform = `translateX(${translateValue}px)`;
  
    slideIndex++;
    setTimeout(showSlides, 5000); 
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(); 
  });

  document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    function moveSlide(step) {
      if (testimonials.length > 0) {
        currentSlide = (currentSlide + step + testimonials.length) % testimonials.length;
        testimonials.forEach((testimonial, index) => {
          testimonial.classList.toggle('active', index === currentSlide);
        });
      } else {
        console.error('No testimonials found.');
      }
    }
  
    if (testimonials.length > 0) {
      moveSlide(0);
    }
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => moveSlide(-1));
      rightArrow.addEventListener('click', () => moveSlide(1));
    }
  });

  function toggleMenu() {
    console.log("test")
    var menu = document.getElementById('nav-menu');
    if (menu.style.left === '0px') {
      menu.style.left = '-100%'; // Hide menu
    } else {
      menu.style.left = '0px'; // Show menu
    }
  }