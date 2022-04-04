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