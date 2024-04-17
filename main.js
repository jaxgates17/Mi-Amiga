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
  
    //console.log(`SlideIndex: ${slideIndex}, TranslateValue: ${translateValue}`); 
  
    slideIndex++;
    setTimeout(showSlides, 5000); 
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(); 
  });