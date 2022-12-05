function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((reveal) => {
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  }
  
  window.addEventListener("scroll", reveal);
  