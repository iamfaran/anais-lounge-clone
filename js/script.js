const navBtn = document.querySelector(".navbtn-box");
const navDrawer = document.querySelector(".nav-drawer");
const closeBtn = document.querySelector(".closebtn");

navBtn.addEventListener("click", showDrawer);
closeBtn.addEventListener("click", closeDrawer);
// nav drawer show
function showDrawer() {
  navDrawer.classList.add("show");
  document.body.style.overflowY = "hidden";
}

function closeDrawer() {
  navDrawer.classList.remove("show");
  document.body.style.overflowY = "auto";
}
