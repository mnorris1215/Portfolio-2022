window.addEventListener('DOMContentLoaded', (e) => {

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

})

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


//Check if an article is visible
function transitionBlock(itemClass){
  /////////////////////////////////////////////////////////////////////////////////Articles
  let articleTitles = document.querySelectorAll(itemClass)

  articleTitles.forEach(title => {
    let isVisible = isScrolledIntoView(title)

    if(isVisible){
      title.classList.add("active")
      if(title.parentNode.previousElementSibling){
        title.parentNode.previousElementSibling.classList.add("active")
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
