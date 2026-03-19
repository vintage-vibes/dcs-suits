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








// slider

const imgslider = document.getElementById("image-slider");
 
let isDown = false;
let startX ;
let scrollLeft ;

imgslider.addEventListener("mousedown", (e)=>{
    isDown = true;
    startX = e.pageX - imgslider.offsetLeft;
    scrollLeft = imgslider.scrollLeft;
    imgslider.style.cursor = 'grabbing'
});

imgslider.addEventListener('mouseleave', () => {
    isDown = false;
    imgslider.style.cursor = 'grab';
  });

  imgslider.addEventListener('mouseup', () => {
    isDown = false;
    imgslider.style.cursor = 'grab';
  });

  imgslider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - imgslider.offsetLeft;
    const walk = (x - startX) * 1.6; // scroll speed → higher = faster
    imgslider.scrollLeft = scrollLeft - walk;
  });


  imgslider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - imgslider.offsetLeft;
    scrollLeft = imgslider.scrollLeft;
  });

  imgslider.addEventListener('touchend', () => {
    isDown = false;
  });

  imgslider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - imgslider.offsetLeft;
    const walk = (x - startX) * 1.6;
    imgslider.scrollLeft = scrollLeft - walk;
  });













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



const images = document.querySelectorAll('.img-container img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.3
});

images.forEach(img => {
    observer.observe(img);
});




