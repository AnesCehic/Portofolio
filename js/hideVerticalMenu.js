var hidden = false;

function hideMenuVertical() {
  var nav = document.getElementById("nesto");
  
  nav.style.transitionDuration = "0.5s";

  if(!hidden) {
    nav.classList.remove("active");
    hidden = true;
  } else {
    nav.classList.add("active");
    hidden = false;
  }

}

var navLink = document.querySelectorAll(".navLinkCustom");

navLink.forEach(link => {
  link.addEventListener('click', () => {
    hideMenuVertical();
  })
});

var closeMenuLink = document.getElementById("closeMenu");
closeMenuLink.addEventListener('click', () => {
  hideMenuVertical();
});