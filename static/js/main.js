
window.addEventListener('DOMContentLoaded', (e) => {

  slowScroll();

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
    // autoplay: true,
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


  /////////////////////////////////////////////////////////////////////////////////Slow down scroll

  function slowScroll(){
    new SmoothScroll(document,12,18)
  }
  
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement 
                || document.documentElement 
                || document.body.parentNode 
                || document.body) // cross browser support for document scrolling
        
    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body 
                && document.documentElement 
                ? document.documentElement 
                : target // safari is the new IE
    
    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })
  
    function scrolled(e) {
      e.preventDefault(); // disable default scrolling
  
      var delta = normalizeWheelDelta(e)
  
      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
  
      if (!moving) update()
    }
  
    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta)
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        else
          return -e.detail/3 // Firefox
      }else
        return e.wheelDelta/120 // IE,Safari,Chrome
    }
  
    function update() {
      moving = true
      
      var delta = (pos - target.scrollTop) / smooth
      
      target.scrollTop += delta
      
      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }
  
    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }
  