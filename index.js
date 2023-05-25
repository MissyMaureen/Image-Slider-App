const PreviousBtn= document.getElementById('prev');
const NextBtn = document.getElementById ('next');
const slider= document.getElementById ('Slider');
const slides= document.getElementById ('Slides');

PreviousBtn.addEventListener('click', PreviousPic);

NextBtn.addEventListener('click', NextPic);

let slideIndex=0
const slideWidth = slider.clientWidth;

function PreviousPic() {
    slideIndex --;
    if (slideIndex < 0){
    slideIndex = 7  
    }
    slides.style.transform= `translateX(-${slideWidth* slideIndex}px)`
    slides.style.transition='ease-in 2s'
 
 }

 function NextPic(){
    slideIndex ++;
  if (slideIndex > 7){
   slideIndex =0 
  }
  slides.style.transform= `translateX(-${slideWidth* slideIndex}px)`
  slides.style.transition = 'ease-in 2s'
}

