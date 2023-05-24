/* --------- NAVIGATION OPEN AND CLOSE --------- */

const navOpenButton = document.getElementById("nav-open");
const navMenuList = document.getElementById("nav-lists");
const navIcon = document.querySelector(".nav-icon");
const header = document.querySelector(".header");

navOpenButton.addEventListener("click", () => {
  navMenuList.classList.toggle("active");
  navIcon.classList.toggle("fa-xmark");
});

/* --------- NAVIGATION CLOSE ON NAB LINKS CLICK --------- */

const navLinks = document.querySelectorAll(".nav-link");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navMenuList.classList.remove("active");
    navIcon.classList.remove("fa-xmark");
  });
}

/* --------- NAVIGATION CLOSE ON WINDOW & HEADER FIXED ON TOP ON SCROLL --------- */

window.onscroll = () => {

  // navigation close
  navMenuList.classList.remove("active");
  navIcon.classList.remove("fa-xmark");

  // header fixed
  if (document.documentElement.scrollTop > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

};
