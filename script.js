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
let  currentindex = 0;

let visibleProducts ;
let productWidth = 0 ;
let maxIndex = 0;

    const container = document.querySelector(".products-container");
    const products = document.querySelectorAll('.product');

function calculateSlider() {  
    

    if (!products.length) return;

    const style = window.getComputedStyle(products[0]);
    const gap = parseInt(style.marginRight) || 0;


    productWidth = products[0].offsetWidth + gap;
            
    visibleProducts = Math.floor(container.parentElement.offsetWidth / productWidth);

    maxIndex = products.length - visibleProducts;

    if (maxIndex < 0) maxIndex = 0;


}


function moveSlider() {
    const position = -(currentindex * productWidth);
    container.style.transform = `translateX(${position}px)`;

    updatebuttons();
}


function updatebuttons(){
      // disable prev at start
    prev.disabled = currentindex === 0;

    // disable next at end
    next.disabled = currentindex >= maxIndex;
}


next.addEventListener("click",()=>{
    if (currentindex < maxIndex) {
        currentindex++;
        moveSlider();
    }
});


prev.addEventListener('click', () => {
    prev.addEventListener("click", () => {
    if (currentindex > 0) {
        currentindex--;
        moveSlider();
    }
});
});

window.addEventListener("resize", () => {
    calculateSlider();
    currentindex = 0;
    moveSlider();

    
});


calculateSlider();
moveSlider();








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
