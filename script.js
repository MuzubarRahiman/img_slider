const items = document.querySelectorAll(".item");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const wrapper = document.querySelector(".wrapper");
const dots = document.querySelectorAll("#dot");
let currentIndex = 0;
console.log(dots);
left.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateSlider();
});

right.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateSlider();
});

function updateSlider() {
  const translateValue = -currentIndex * 100;
  wrapper.style.transition = "transform 1s ease-in-out";
  wrapper.style.transform = `translateX(${translateValue}vw)`;

  dots.forEach((dot,idx)=>{
    if(idx===currentIndex){
      dot.classList.add("active");
    }else{
      dot.classList.remove("active");
    }
  })
  // Reset transition property after transition ends
  wrapper.addEventListener("transitionend", () => {
    wrapper.style.transition = "";
  });
}

// Initial positioning of arrows
updateSlider();
