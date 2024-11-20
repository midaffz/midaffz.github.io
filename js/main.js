let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px' ,
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-text',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:200, origin:'right'});


//  images to toggle
const toggleIcon = document.getElementById('toggle-icon');
const boxes = ['#boxz1', '#boxz2', '#boxz3']; // Array of box IDs

//  event listener to the icon
toggleIcon.addEventListener('click', (event) => {
    // default link 
    event.preventDefault();

    // Loop through each box and toggle 
    boxes.forEach(boxId => {
        const box = document.querySelector(boxId);

        if (box.style.display === 'none' || !box.style.display) {
            // If the box is hidden, make it visible
            box.style.display = 'block'; 
            setTimeout(() => {
                box.style.opacity = '1'; 
            }, 10); 
        } else {
            // If the box is visible, fade it out
            box.style.opacity = '0'; // Trigger fade-out
            setTimeout(() => {
                box.style.display = 'none'; 
            }, 1500); // duration of the opacity transition (1.5s)
        }
    });
});
