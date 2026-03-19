const slider = document.querySelector('.service-container');

let isDown = false;
let startX =0;
let scrollLeft =0;
let velocity = 0;
let rafId = null;

function startDrag(e) {
    isDown = true;
    slider.classList.add('active');           // visual feedback (cursor: grabbing usually)
    
    // Support both mouse and touch
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    startX = pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    // Cancel any ongoing momentum
    cancelAnimationFrame(rafId);
    velocity = 0;
}
function stopDrag() {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('active');

    // Optional: add a little momentum/inertia
    // (uncomment if you want smooth flick feel)
    // if (Math.abs(velocity) > 0.5) {
    //     function momentum() {
    //         slider.scrollLeft -= velocity;
    //         velocity *= 0.95; // friction
    //         if (Math.abs(velocity) > 0.5) {
    //             rafId = requestAnimationFrame(momentum);
    //         }
    //     }
    //     rafId = requestAnimationFrame(momentum);
    // }
}

function drag(e) {
    if (!isDown) return;
    const pageX = e.pageX || e.touches?.[0]?.pageX;
    const pageY = e.pageY || e.touches?.[0]?.pageY;

    const x = pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.8;

    // Only prevent default if horizontal movement is bigger than vertical
    const moveX = Math.abs(pageX - startX);
    const moveY = Math.abs(pageY - startX);

    if (moveX > moveY) {
        e.preventDefault(); // only block when dragging sideways
        slider.scrollLeft = scrollLeft - walk;
    }
}



slider.addEventListener('mousedown', startDrag);
slider.addEventListener('mousemove', drag);
slider.addEventListener('mouseup', stopDrag);
slider.addEventListener('mouseleave', stopDrag);

// Touch events (very important for mobile)
slider.addEventListener('touchstart', startDrag, { passive: false });
slider.addEventListener('touchmove', drag, { passive: false });
slider.addEventListener('touchend', stopDrag);
slider.addEventListener('touchcancel', stopDrag);




const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.pricing-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        // remove active from all
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // activate clicked
        tab.classList.add('active');
        sections[tab.dataset.tab].classList.add('active');
    });
});


 const burger = document.querySelector('.burger-menu');
 const mobile = document.getElementById('mobile-links');
 const navLinks = document.querySelectorAll('.mobile-nav .nav-links a');
 const navMenu = document.querySelector('.mobile-nav .nav-links');

 burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    mobile.classList.toggle('active');
 })


 navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active'); // close menu
        burger.classList.remove('active');  // reset burger icon
    });
});

 
//  burger.addEventListener('click',()=>{
//     burger.classList.remove('active');
//     mobile.classList.remove('active');
//  })
