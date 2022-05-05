window.addEventListener('DOMContentLoaded', (e) => {

  /////////////////////////////////////////////////////////////////////////////////Bamboo Doors
  removeDoors()


  /////////////////////////////////////////////////////////////////////////////////Mobile Menu

  let menuBtn = document.querySelector("#menu-btn")
  let mobileMenu = document.querySelector("#mobile-menu")

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    mobileMenu.classList.toggle("hidden")
    document.body.classList.toggle("overflow-hidden")
  })
  
  const anchorLinks = document.querySelectorAll(".smooth-scroll")

  anchorLinks.forEach(link => {
    link.addEventListener("click", smoothScroll)
  })

  transitionBlock(".article-info")
  transitionBlock(".top-white-line")
  transitionBlock(".fade-up")


  // And now start the process:
  // setTimeout(callStartChange, 1000);


})

// function callStartChange() {
//   startChange();
//   setTimeout(callStartChange, 1000);
// }


function removeDoors(){
  let doors = document.querySelectorAll("#bamboo-doors > div")
  doors.forEach(door => {
    door.classList.add("remove")
  })
}



document.addEventListener("scroll", () => {
  transitionBlock(".article-info")
})


//Smooth Scroll Function
function smoothScroll(e){
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  })
}


function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && ((elemBottom - 400) <= window.innerHeight);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

/////////////////////////////////////////////////////////////////////////////////HP Carousel
$(document).ready(function(){
  $('#carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 0.5,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 3500,
    arrows: false,
    pauseOnHover: true,
  });
});

/////////////////////////////////////////////////////////////////////////////////HP Skills





//Check if an article is visible
function transitionBlock(itemClass){
  /////////////////////////////////////////////////////////////////////////////////Articles
  let textItems = document.querySelectorAll(itemClass)

  textItems.forEach(text => {
    let isVisible = isScrolledIntoView(text)

    if(isVisible){
      text.classList.add("active")
      if(text.parentNode.previousElementSibling){
        text.parentNode.previousElementSibling.classList.add("active")
      }
    }
  })
}



/////////////////////////////////////////////////////////////////////////////////Work
var $grid = $('#work').isotope({
  // itemSelector: '.case-study',
  transitionDuration: 500,
  horizontalOrder: true,

  // layout mode options
  masonry: {
    horizontalOrder: true,
  }
});

var filter = "";

$('.work-filters').on( 'click', '.filter', function() {
  var $this = $(this);

  $this.addClass('active').siblings().removeClass('active');

  // set filter for group
  filter = $this.attr('data-filter');

  $grid.isotope({filter: filter})

});
