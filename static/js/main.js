window.addEventListener('DOMContentLoaded', (e) => {
  const anchorLinks = document.querySelectorAll(".smooth-scroll")

  anchorLinks.forEach(link => {
    link.addEventListener("click", smoothScroll)
  })
})


//Smooth Scroll Function
function smoothScroll(e){
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  })
}




///////////////////////////////////////////////////////////////////////////Work
var $grid = $('#work').isotope({
  // itemSelector: '.case-study',
  transitionDuration: 500,
  horizontalOrder: true,

  // layout mode options
  masonry: {
    horizontalOrder: true
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
