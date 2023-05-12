//toggle class
const navbarNav = document.querySelector(".navbar-nav");
//klik menu
document.querySelector("#cake-menu ").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan perintah
const cake = document.querySelector("#cake-menu");
document.addEventListener("click", function (e) {
  if (!cake.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
