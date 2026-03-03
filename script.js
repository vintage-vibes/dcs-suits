const track = document.querySelectorAll('.product-container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const test_track = document.querySelector(".testimonial-track");
const slides = document.querySelectorAll(".testimonial-container");
const nextBtn = document.querySelector(".test-next");
const prevBtn = document.querySelector(".test-prev");
const slider = document.querySelector(".testimonial-slider");


let index = 0 ;
const totalSlides = slides.length

const showSlide = (i) =>{
    slides.forEach(slide =>{
        slide.classList.remove("active");
    });
    
    slides[i].classList.add("active");
}


nextBtn.addEventListener("click", () => {
    index++;
    if(index >= totalSlides) index = 0;
    showSlide(index);
});

prevBtn.addEventListener("click", () => {
    index--;
    if(index < 0) index = totalSlides - 1;
    showSlide(index);
});

let autoSlide = setInterval(() => {
    index++;
    if(index >= totalSlides) index = 0;
    showSlide(index);
}, 5000);




// product-container
let position = 0;
let visibleProducts ;
let productWidth ;
let maxScroll;

    const container = document.querySelector(".products-container");
    const products = document.querySelectorAll('.product');

function calculateSlider() {  
    

    if (!products.length) return;

    const style = window.getComputedStyle(products[0]);
    const gap = parseInt(style.marginRight) || 0;


    productWidth = products[0].offsetWidth + gap;
            
    visibleProducts = Math.floor(container.offsetWidth / productWidth);

    maxScroll =(products.length - visibleProducts) * productWidth
}


function updatebuttons(){
      // disable prev at start
    prev.disabled = position === 0;

    // disable next at end
    next.disabled = Math.abs(position) >= maxScroll;
}


next.addEventListener("click",()=>{
    if (Math.abs(position) < maxScroll) {
        position -= productWidth;
        container.style.transform = `translateX(${position}px)`;
        updatebuttons();
    }
});


prev.addEventListener('click', () => {
   if (position < 0) {
        position += productWidth;
        container.style.transform = `translateX(${position}px)`;
        updatebuttons();
    }
});

window.addEventListener("resize", () => {
    calculateSlider();
    position = 0; // reset position
    container.style.transform = `translateX(0px)`;

    updatebuttons();
});

calculateSlider();
updatebuttons();


// mobile nav

const burger = document.querySelector('.burger-menu');
const tab = document.querySelector('.mobile');
const navlinks = document.querySelectorAll('.mobile-links a')

burger.addEventListener("click" ,() =>{
    burger.classList.toggle("active");
    tab.classList.toggle('active');
    // document.body.classList.toggle("menu-open");
})

navlinks.forEach(link =>{
    link.addEventListener('click',()=>{
        burger.classList.remove("active");
        tab.classList.remove('active');
    })
})
