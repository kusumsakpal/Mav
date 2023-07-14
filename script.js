const text = document.querySelector(".sec-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "SUCCESS.";
  }, 0);
  setTimeout(() => {
    text.textContent = "GROWTH.";
  }, 3000);
  setTimeout(() => {
    text.textContent = "DREAM.";
  }, 6000);
};
textLoad();

setInterval(textLoad, 12000);


$(document).ready(function(){
    $(".counter").counterUp({
        delay : 10,
        time : 700
    })
})

const carousel = document.querySelector(".carousel");

const arrowBtns = document.querySelectorAll(".services-container i");
const firstCellWidth = carousel.querySelector(".cell").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

let cardPreView = Math.round(carousel.offsetWidth / firstCellWidth );


carouselChildrens.slice(-cardPreView).reverse().forEach(card =>{
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPreView).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click",() =>{
        carousel.scrollLeft += btn.id === "left"? -firstCellWidth : firstCellWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");

}

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth;
        carousel.classList.remove("no-transition");
    }

}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }

})
document.getElementById("html-form").addEventListener("click", function() {
    // Scroll to the desired section or webpage
    var targetElement = document.getElementById("form"); // Replace with the ID of the target section or element
    targetElement.scrollIntoView({ behavior: 'ease-in-out' });
  });

document.getElementById("htmlForm2").addEventListener("click", function() {
    // Scroll to the desired section or webpage
    var targetElement = document.getElementById("form"); // Replace with the ID of the target section or element
    targetElement.scrollIntoView({ behavior: 'ease-in-out' });
  });

  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('#nav').classList.toggle('open');
  });
  