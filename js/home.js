
const scrollable = document.getElementById('categories__body');
const scrollUpButton = document.getElementById('scrollUp');
const scrollDownButton = document.getElementById('scrollDown');
const shapes = document.querySelectorAll('.shape');
const colors = ['#E50000', '#333', '#333','#333'];
const categoryWidth = document.getElementById('categories__body').getBoundingClientRect().width;
let colorIndex = 0;


function updateColors() {
    shapes.forEach((shape, index) => {
         shape.style.backgroundColor = colors[(colorIndex + index) % colors.length];
    });
};

scrollUpButton.addEventListener('click', () => {
    scrollable.scrollBy({
        left:- categoryWidth, 
        behavior: 'smooth'
    });
    colorIndex = (colorIndex +1) % colors.length;
    updateColors();
});

scrollDownButton.addEventListener('click', () => {
    scrollable.scrollBy({
        left: categoryWidth, 
        behavior: 'smooth'
    });
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    updateColors();
});