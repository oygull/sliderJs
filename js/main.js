let elSliderItem = document.getElementsByClassName("slider__item");
let elSliderBox = document.getElementsByClassName("slider__imgbox");
let elPrev = document.getElementById("prevBtn");
let elNext = document.getElementById("nextBtn");
let index = 1;
mySlides();


function mySlides() {
  if (index > elSliderItem.length){
    index = 1
  }    
  if (index < 1) {
    index = elSliderItem.length
  }
  for (i = 0; i < elSliderItem.length; i++) {
    elSliderItem[i].style.display = "none";  
  }
  elSliderItem[index-1].style.display = "block"; 
}

elPrev.addEventListener("click", ()=>{
  mySlides(index -= 1);
})
elNext.addEventListener("click", ()=>{
  mySlides(index += 1);
})

